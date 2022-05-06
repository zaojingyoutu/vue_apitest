
<template>
<div style="margin-right: 20px;
    margin-left: 20px;">
  <div style="margin-right: 10px;
    margin-left: 10px;float: left;margin-top: 5px;">
            <a-button  type="primary" >
      <router-link to="/createUser" > 
        <a  style="color: white">Create</a>
      </router-link>
      </a-button>
    </div>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1200, y: 700 }">
      <template #bodyCell="{ record,column,text  }">
      <template v-if="column.dataIndex === 'username'">
          <router-link :to="{path:'/createUser',query:{id:record.id}}" >
              <a  >{{ text }}</a>
          </router-link>
      </template>

      <template v-if="column.key === 'operation'">
        <a @click="deletes(record)" >Delete</a> |
          <router-link :to="{path:'/createUser',query:{id: record.id,}}" >
              <a  >Edit</a>
          </router-link>
      </template>
    </template>
  </a-table>
</div>
</template>
<script>
import { defineComponent } from 'vue';
import {user_get,user_del} from '@/api/user'

const columns = [{
  title: 'Full Name',
  width: '20%' ,
  dataIndex: 'username',
  key: 'namusernamee',

}, {
  title: 'email',
  width: '20%',
  dataIndex: 'email',
  key: 'email',

}, {
  title: 'date_joined',
  dataIndex: 'date_joined',
  key: 'date_joined',
  width: '20%',
}, {
  title: 'last_login',
  dataIndex: 'last_login',
  key: 'last_login',
  width: '20%',
},
 {
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
    user_get().then((res) => {
         this.data =  res.data;
        console.log('=========',);
     });

  },

  setup(){
    const deletes = (record) => {
         user_del(record.id).then((res) => {
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

