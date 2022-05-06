
<template>
  <a-button type="primary">
    <router-link to="create_testplan">Create </router-link>
  </a-button>
  <a-table :columns="columns" :data-source="data" :scroll="{ y: 800 }">
    <template #bodyCell="{ record, column }">
      <template v-if="column.dataIndex === 'name'"> </template>

      <template v-if="column.key === 'operation'">
        <a @click="deletes(record)">Delete</a> |
        <router-link
          :to="{ path: '/create_testplan', query: { id: record.id } }"
        >
          <a>Edit</a>
        </router-link>
        |
        <router-link :to="{ path: '/report', query: { testplan_id: record.id } }">
          <a>report</a>
        </router-link>
        |<a @click="runplan(record.id )"> run</a>
      </template>
    </template>
  </a-table>
</template>
<script>
import { defineComponent } from "vue";
import { testplan_get, testplan_del } from "@/api/testplan";
import axios from "axios";

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
  data() {
    return {
      data: [],
      columns,
    };
  },
  created() {
    testplan_get().then((res) => {
      this.data = res.data;
      console.log("=========");
    });
  },

  setup() {
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
      axios({
        method: "post",
        headers: { Authorization: localStorage.getItem("token") },
        url: "runtestplan/",
        data: {'id': record},
      }).then((res) => {
        if (res.data.code == 200) {
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
        console.log(res.data.data.result);
      });
    };

    return {
      deletes,
      runplan,
    };
  },
});
</script>

