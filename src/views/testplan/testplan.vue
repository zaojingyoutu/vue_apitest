<template>
  <div style="
        margin-right: 10px;
        margin-left: 10px;
        float: left;
        margin-top: 5px;
      "><a-button type="primary">
      <router-link to="create_testplan">新增 </router-link>
    </a-button></div>
  <a-table :columns="columns" :data-source="data" :scroll="{ y: 800 }">
    <template #bodyCell="{ record, column, text }">
      <template v-if="column.dataIndex === 'name'">
        <router-link :to="{ path: '/create_testplan', query: { id: record.id } }">
          <a>{{ text }}</a>
        </router-link>
      </template>

      <template v-if="column.key === 'operation'">

        <router-link :to="{ path: '/create_testplan', query: { id: record.id } }">
          <a>编辑</a>
        </router-link>
        |
        <router-link :to="{ path: '/reportList', query: { testplan_id: record.id } }">
          <a>测试报告</a>
        </router-link>
        |<a @click="runplan(record.id)"> 运行</a> |
        <a type="primary" @click="showModal(record)">添加定时任务</a>
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            更多
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a @click="deletes(record)">删除</a>
              </a-menu-item>
              <a-menu-item>
                <a @click="toLocust(record)">转locust</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </template>
  </a-table>
  <a-modal v-model:visible="visible" title="添加定时任务" @ok="handleOk">
    <a-form-item label="cron表达式" :rules="[{ required: true }]">
      <a-input v-model:value="cronData.value.cron" />
      <a-radio v-model:checked="checked">删除</a-radio>
    </a-form-item>
  </a-modal>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
import { testplan_get, testplan_del } from "@/api/testplan";
import { runTestplan_post, taskTestplanPost, Deltask } from "@/api/runTestplan";
const columns = [
  {
    title: "名称",
    width: "20%",
    dataIndex: "name",
    key: "name",
    ellipsis: true,
  },
  {
    title: "描述",
    width: "20%",
    dataIndex: "describe",
    key: "describe",
    ellipsis: true,
  },
  {
    title: "项目",
    dataIndex: "project__name",
    key: "project__name",
    width: "20%",
    ellipsis: true,
  },
  {
    title: "创建时间",
    dataIndex: "create_time",
    key: "create_time",
    width: "20%",
    ellipsis: true,
  },
  {
    title: "操作",
    key: "operation",
    width: 120,
  },
];
import { message } from "ant-design-vue";
import { locust_create } from "../../api/locust";

export default defineComponent({
  setup() {
    const data = ref();
    const testplanGet = () => {
      testplan_get().then((res) => {
        data.value = res.data;
      });
    }
    testplanGet()
    const deletes = (record) => {
      testplan_del(record.id).then((res) => {
        if (res.code == 200) {
          message.success({
            content: "删除成功！",
            duration: 5,
          });
          testplanGet();
        } else {
          message.success({
            content: "删除失败！",
            duration: 5,
          });
        }
      });
    };
    const runplan = (record) => {
      message.success({
        content: "开始运行！",
        duration: 5,
      });
      runTestplan_post({ id: record }).then((res) => {
        if (res.code == 200) {
          message.success({
            content: "运行成功！",
            duration: 5,
          });
          //  location.reload();
        } else {
          message.success({
            content: "运行失败！",
            duration: 5,
          });
        }
      });
    };

    const visible = ref(false);
    const showModal = (record) => {
      cronData.value = { test_plan_id: record.id, cron: record.task__cron };
      if (record.task__id) {
        cronData.value.id = record.task__id;
      }
      visible.value = true;
      checked.value == false
    };
    const handleOk = () => {
      if (checked.value == true) {
        Deltask(cronData.value.id).then((res) => {
          if (res.code == 200) {
            message.success({
              content: "删除成功！",
              duration: 5,
            });
            checked.value = false;
            testplan_get().then((res) => {
              data.value = res.data;
            });
          } else {
            message.success({
              content: "删除失败！",
              duration: 5,
            });
          }
        });
      } else {
        Deltask(cronData.value.id)
        taskTestplanPost(cronData.value).then((res) => {
          if (res.code == 200) {
            message.success({
              content: "成功！",
              duration: 5,
            });
            testplan_get().then((res) => {
              data.value = res.data;
            });
          } else {
            message.success({
              content: "失败！",
              duration: 5,
            });
          }
        });
      }

      visible.value = false;
    };
    const cronData = reactive({});
    const checked = ref(false);

    const toLocust = (record) => {
      const requstData = {
        "mold": "tofile",
        "name": record.name + ".py",
        "testplan_id": record.id,
        "create_user": JSON.parse(localStorage.user).name
      }

      locust_create(requstData).then((res) => {
        if (res.code == 200) {
          message.success({
            content: "添加成功！",
            duration: 5,
          });
        } else {
          message.error({
            content: "添加失败！" + res.msg,
            duration: 5,
          });
        }
      });

    }
    return {
      deletes,
      runplan,
      visible,
      showModal,
      handleOk,
      cronData,
      checked,
      data,
      columns,
      toLocust,
    };
  },
});
</script>
