
<template>
  <a-button type="primary">
    <router-link to="create_testplan">Create </router-link>
  </a-button>
  <a-table :columns="columns" :data-source="data" :scroll="{ y: 800 }">
    <template #bodyCell="{ record, column, text }">
      <template v-if="column.dataIndex === 'name'">
        <router-link
          :to="{ path: '/create_testplan', query: { id: record.id } }"
        >
          <a>{{ text }}</a>
        </router-link>
      </template>

      <template v-if="column.key === 'operation'">
        <a @click="deletes(record)">Delete</a> |
        <router-link
          :to="{ path: '/create_testplan', query: { id: record.id } }"
        >
          <a>Edit</a>
        </router-link>
        |
        <router-link
          :to="{ path: '/reportList', query: { testplan_id: record.id } }"
        >
          <a>report</a>
        </router-link>
        |<a @click="runplan(record.id)"> run</a> |
        <a type="primary" @click="showModal(record)">添加定时任务</a>
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
    title: "Full Name",
    width: "20%",
    dataIndex: "name",
    key: "name",
    ellipsis: true,
  },
  {
    title: "describe",
    width: "20%",
    dataIndex: "describe",
    key: "describe",
    ellipsis: true,
  },
  {
    title: "project",
    dataIndex: "project__name",
    key: "project__name",
    width: "20%",
    ellipsis: true,
  },
  {
    title: "createtime",
    dataIndex: "create_time",
    key: "create_time",
    width: "20%",
    ellipsis: true,
  },
  {
    title: "Action",
    key: "operation",
    width: 120,
  },
];
import { message } from "ant-design-vue";
export default defineComponent({
  setup() {
    const data = ref();
    testplan_get().then((res) => {
      data.value = res.data;
    });
    const deletes = (record) => {
      testplan_del(record.id).then((res) => {
        if (res.code == 200) {
          message.success({
            content: "删除成功！",
            duration: 5,
          });
          location.reload();
        } else {
          message.success({
            content: "删除失败！",
            duration: 5,
          });
        }

        console.log(res);
        console.log(res.data.data.result);
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

        console.log(res);
        console.log(res.data.result);
      });
    };

    const visible = ref(false);
    const showModal = (record) => {
      cronData.value = { test_plan_id: record.id, cron: record.task__cron };
      if (record.task__id) {
        cronData.value.id = record.task__id;
      }
      visible.value = true;
    };
    const handleOk = (e) => {
      console.log(e, cronData);
      if (checked.value == true) {
        Deltask(cronData.value.id).then((res) => {
          if (res.code == 200) {
            message.success({
              content: "删除成功！",
              duration: 5,
            });
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
        taskTestplanPost(cronData.value).then((res) => {
          if (res.code == 200) {
            message.success({
              content: "添加成功！",
              duration: 5,
            });
            testplan_get().then((res) => {
              data.value = res.data;
            });
          } else {
            message.success({
              content: "添加失败！",
              duration: 5,
            });
          }
        });
      }

      visible.value = false;
    };
    const cronData = reactive({});
    const checked = ref(false);
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
    };
  },
});
</script>

