
<template>
  <a-table :columns="columns" :data-source="data"  :pagination="pagination" :scroll="{ y: 800 }" @change="handleTableChange">
    <template #bodyCell="{ record, column, text }">
      <template v-if="column.dataIndex === 'name'">
        <router-link :to="{ path: '/report', query: { id: record.id } }">
          <a>{{ text }}</a>
        </router-link>
      </template>
      <template v-if="column.dataIndex === 'result'">
        {{ record.failed_count > 0 ? "失败" : "通过" }}
      </template>

      <template v-if="column.key === 'operation'">
        <a @click="deletes(record)">删除</a>
      </template>
    </template>
  </a-table>
</template>
<script>
import { defineComponent, ref,computed } from "vue";
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
    const current = ref(1)
    const pageSize = ref(10)
    const total = ref()
    const id = useRouter().currentRoute.value.query;
    const reportGet = () => {
      report_get({...id,current:current.value,pageSize:pageSize.value}).then((res) => {
        data.value = res.data;
        total.value = res.total
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
    
    const pagination = computed(() => ({
      total: total.value,
      current: current.value,
      pageSize: pageSize.value,
    }));

    const handleTableChange = (pag)=>{
      current.value = pag.current
      pageSize.value = pag.pageSize
      reportGet();
    }

    return {
      deletes,
      data,
      columns,
      pagination,
      handleTableChange
    };
  },
});
</script>

