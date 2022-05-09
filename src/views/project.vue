
<template>
<div style="margin-right: 20px;
    margin-left: 20px;">
   <a-button  type="primary" >
<!--      <a href="create_projrct">Create</a>-->
      <router-link to="create_projrct" >
        <a  style="color: white">Create</a>
      </router-link>
    </a-button>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1200, y: 700 }">
      <template #bodyCell="{ record,column,text  }">
      <template v-if="column.dataIndex === 'name'">
          <router-link :to="{path:'/case',query:{project_id:record.id}}" >
              <a  >{{ text }}</a>
          </router-link>
      </template>

      <template v-if="column.key === 'operation'">
        <a @click="deletes(record)" >Delete</a> |
          <router-link :to="{path:'/create_projrct',query:{id: record.id,}}" >
              <a  >Edit</a>
          </router-link>
      </template>
    </template>
  </a-table>
</div>
</template>
<script>
import { defineComponent } from 'vue';
import {project_get,project_del} from '@/api/project'

const columns = [{
  title: 'Full Name',
  width: '20%' ,
  dataIndex: 'name',
  key: 'name',

}, {
  title: 'describe',
  width: '20%',
  dataIndex: 'describe',
  key: 'describe',

}, {
  title: 'start_time',
  dataIndex: 'start_time',
  key: 'start_time',
  width: '20%',
}, {
  title: 'end_time',
  dataIndex: 'end_time',
  key: 'end_time',
  width: '20%',
},


  {
  title: 'createtime',
  dataIndex: 'create_time',
  key: 'create_time',
  width: '20%',
}, {
  title: 'Action',
  key: 'operation',
  width: 120,
}];

import {message} from "ant-design-vue";
export default defineComponent({
  data() {
    return {
      data:[],
      columns,
    };
  },
  created() {
    project_get().then((res) => {
         this.data =  res.data;
        console.log('=========',);
     });

  },

  setup(){
    const deletes = (record) => {
         project_del(record.id).then((res) => {
               if (res.code == 200)
               {
                   message.success({
                           content: "删除成功！",
                           duration: 5}
                   );
                   location.reload();
               }
               else {
                    message.success({
                           content: "删除失败！",
                           duration: 5}
                   );
               }

             console.log(res);
             console.log(res.data.data.result);
           });
    }

    return{
        deletes
    }
  }

});
</script>

