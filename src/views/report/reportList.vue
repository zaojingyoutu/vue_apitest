
<template>
  <a-table :columns="columns" :data-source="data" :scroll="{ y: 800 }">
    <template #bodyCell="{ record, column, text }">
      <template v-if="column.dataIndex === 'name'">
        <router-link :to="{ path: '/report', query: { id: record.id } }">
          <a>{{ text }}</a>
        </router-link>
      </template>
      <template v-if="column.dataIndex === 'result'">
        {{ JSON.parse(text).cases_false > 0 ? "失败" : "通过" }}
      </template>

      <template v-if="column.key === 'operation'">
        <a @click="deletes(record)">删除</a>
      </template>
    </template>
  </a-table>
</template>
<script>
import { defineComponent, ref } from "vue";
import { report_get, report_del } from "@/api/report";
import { useRouter } from "vue-router";

const columns = [
  {
    title: "名称",
    width: "20%",
    dataIndex: "name",
    key: "name",
    ellipsis: true,
  },
  {
    title: "结果",
    width: "20%",
    dataIndex: "result",
    key: "result",
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
export default defineComponent({
  setup() {
    const data = ref();
    const id = useRouter().currentRoute.value.query;
    const reportGet = () => {
      report_get(id).then((res) => {
        data.value = res.data;
      });
    };
    reportGet();
    const deletes = (record) => {
      report_del(record.id).then((res) => {
        if (res.code == 200) {
          message.success({
            content: "删除成功！",
            duration: 5,
          });
          reportGet();
        } else {
          message.success({
            content: "删除失败！",
            duration: 5,
          });
        }
      });
    };

    return {
      deletes,
      data,
      columns,
    };
  },
});
</script>

