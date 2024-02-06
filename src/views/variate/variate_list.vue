<template>
  <a-button type="primary">
    <router-link to="create_variate">Create </router-link>
  </a-button>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1200, y: 800 }">
    <template #bodyCell="{ record, column, text }">
      <template v-if="column.dataIndex === 'name'">
        <router-link :to="{ path: '/case', query: { project_id: record.id } }">
          <a>{{ text }}</a>
        </router-link>
      </template>

      <template v-if="column.key === 'operation'">
        <a @click="deletes(record)">Delete</a> |
        <router-link
          :to="{ path: '/create_variate', query: { id: record.id } }"
        >
          <a>Edit</a>
        </router-link>
      </template>
    </template>
  </a-table>
</template>
<script>
import { defineComponent, ref } from "vue";
import { variate_get, variate_del } from "@/api/variate";

const columns = [
  {
    title: "变量名",
    width: "20%",
    dataIndex: "key",
    ellipsis: true,
    key: "key",
  },
  {
    title: "变量值",
    width: "20%",
    dataIndex: "value",
    ellipsis: true,
    key: "value",
  },
  {
    title: "环境",
    dataIndex: "env",
    key: "env",
    ellipsis: true,
    width: "20%",
  },
  {
    title: "项目",
    dataIndex: "project__name",
    key: "project__name",
    ellipsis: true,
    width: "20%",
  },

  {
    title: "createtime",
    dataIndex: "create_time",
    key: "create_time",
    ellipsis: true,
    width: "20%",
  },
  {
    title: "Action",
    key: "operation",
    ellipsis: true,
    width: 120,
  },
];

import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const data = ref();
    const queryData = useRouter().currentRoute.value.query;
    const variateGet = () => {    
      if (queryData != null) {
        variate_get(queryData).then((res) => {
          data.value = res.data;
        });
      }
    };
    variateGet();
    const deletes = (record) => {
      variate_del(record.id).then((res) => {
        if (res.code == 200) {
          message.success({
            content: "删除成功！",
            duration: 5,
          });
          variateGet();
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
