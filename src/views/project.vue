<template>
  <div style="
        margin-right: 10px;
        margin-left: 10px;
        float: left;
        margin-top: 5px;
      "><a-button type="primary">
      <router-link to="create_projrct">
        新增
      </router-link>
    </a-button></div>
  <div >
    <a-table :columns="columns" :data-source="data" :scroll="{ x: 1200, y: 700 }">
      <template #bodyCell="{ record, column, text }">
        <template v-if="column.dataIndex === 'name'">
          <router-link :to="{ path: '/api', query: { project_id: record.id } }">
            <a>{{ text }}</a>
          </router-link>
        </template>

        <template v-if="column.key === 'operation'">
          <a @click="deletes(record)">删除</a> |
          <router-link :to="{ path: '/create_projrct', query: { id: record.id, } }">
            <a>编辑</a>
          </router-link>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { project_get, project_del } from '@/api/project'

const columns = [{
  title: '项目名',
  width: '20%',
  dataIndex: 'name',
  key: 'name',

}, {
  title: '描述',
  width: '20%',
  dataIndex: 'describe',
  key: 'describe',

}, {
  title: '开始时间',
  dataIndex: 'start_time',
  key: 'start_time',
  width: '20%',
}, {
  title: '结束时间',
  dataIndex: 'end_time',
  key: 'end_time',
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
      project_get().then((res) => {
        data.value = res.data;
      });
    }
    projectGet()
    const deletes = (record) => {
      project_del(record.id).then((res) => {
        if (res.code == 200) {
          message.success({
            content: "删除成功！",
            duration: 5
          }
          );
          projectGet()
        }
        else {
          message.success({
            content: "删除失败！",
            duration: 5
          }
          );
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
