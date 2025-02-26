<template>
  <div style="
        margin-right: 10px;
        margin-left: 10px;
        float: left;
        margin-top: 5px;
      "></div>
  <div >
    <a-table :columns="columns" :data-source="data" :scroll="{ x: 1200, y: 700 }">
      <template #bodyCell="{ record, column, text }">
        <template v-if="column.dataIndex === 'name'">
          <router-link :to="{ path: '/apiDetail', query: { project_id: record.project_id,id: record.cases_id } }">
            <a>{{ text }}</a>
          </router-link>
        </template>

        <template v-if="column.key === 'operation'">
          <a @click="deletes(record)">删除</a> 
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { common_case_get, common_case_del } from '@/api/common_case'

const columns = [{
  title: '名字',
  width: '20%',
  dataIndex: 'name',
  key: 'name',

}, {
  title: '描述',
  width: '20%',
  dataIndex: 'cases_describe',
  key: 'cases_describe',

}, {
  title: '项目',
  dataIndex: 'project_name',
  key: 'project_name',
  width: '20%',
}, 
{
  title: '创建时间',
  dataIndex: 'create_time',
  key: 'create_time',
  width: '20%',
}, {
  title: '操作',
  key: 'operation',
  width: 120,
}];

import { message } from "ant-design-vue";
export default defineComponent({
  setup() {
    const data = ref();
    const projectGet = () => {
      common_case_get().then((res) => {
        data.value = res;
      });
    }
    projectGet()
    const deletes = (record) => {
      common_case_del(record.id).then((res) => {
        if (res.code == 204) {
          message.success({
            content: "删除成功！",
            duration: 5
          }
          );
          projectGet()
        }
        else {
          message.success({
            content: "删除成功！",
            duration: 5
          }
          );
          projectGet()
        }
      });
    }

    return {
      deletes,
      columns,
      data
    }
  }

});
</script>
