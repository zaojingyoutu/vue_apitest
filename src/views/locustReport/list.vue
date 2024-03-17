
<template>
    <a-table :columns="columns" :data-source="data" :scroll="{ y: 800 }">
      <template #bodyCell="{ record, column ,text}">
        <template v-if="column.dataIndex === 'name'">
          <router-link :to="{ path: '/locustReport/ditail', query: { id: record.id } }">
            <a>{{text}}</a>
          </router-link>
         </template>
        <template v-if="column.key === 'operation'">
          <a @click="deletes(record)">Delete</a> 
          
        </template>
      </template>
    </a-table>
  </template>
  <script>
  import { defineComponent,ref } from "vue";
  import { locustReportGet, locustReportDel } from "@/api/locustReport";
  
  const columns = [
    {
      title: "名称",
      width: "20%",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
    },
    {
      title: "locust",
      width: "20%",
      dataIndex: "locust_name",
      key: "locust_name",
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
  import { message} from "ant-design-vue";
  import { useRouter } from "vue-router";

  export default defineComponent({
    setup() {

        let data =ref()
         const query = useRouter().currentRoute.value.query;
         locustReportGet({locust:query.locustId}).then((res) => {
            data.value = res
        })
        const deletes = (record) => {
            locustReportDel(record.id).then((res) => {
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
            });
        };
    
  
      return {
        deletes,
        data,
        columns,
      };
  }});
  </script>
  
  