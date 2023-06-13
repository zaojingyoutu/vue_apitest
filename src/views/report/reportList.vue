
<template>
  <a-table :columns="columns" :data-source="data" :scroll="{ y: 800 }">
    <template #bodyCell="{ record, column ,text}">
      <template v-if="column.dataIndex === 'name'">
        <router-link :to="{ path: '/report', query: { id: record.id } }">
          <a>{{text}}</a>
        </router-link>
       </template>
       <template v-if="column.dataIndex === 'result'">
        {{ JSON.parse(text).cases_false >0 ? '失败': '通过'}}
       </template>

      <template v-if="column.key === 'operation'">
        <a @click="deletes(record)">Delete</a> 
        
      </template>
    </template>
  </a-table>
</template>
<script>
import { defineComponent } from "vue";
import { report_get, report_del } from "@/api/report";
import {useRouter } from 'vue-router';

const columns = [
  {
    title: "Full Name",
    width: "20%",
    dataIndex: "name",
    key: "name",
    ellipsis: true,
  },
  {
    title: "result",
    width: "20%",
    dataIndex: "result",
    key: "result",
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
    const id = useRouter().currentRoute.value.query
    report_get(id).then((res) => {
      this.data = res.data;
    });
  },

  setup() {
    const deletes = (record) => {
      report_del(record.id).then((res) => {
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


    return {
      deletes,
    };
  },
});
</script>

