<template>
  <div style="
        margin-right: 10px;
        margin-left: 10px;
        float: left;
        margin-top: 5px;
      ">
    <a-button type="primary">
      <router-link to="/createUser">
        新增
      </router-link>
    </a-button>
  </div>
  <div>
    <a-table :columns="columns" :data-source="data" :scroll="{ x: 1200, y: 700 }">
      <template #bodyCell="{ record, column, text }">
        <template v-if="column.dataIndex === 'username'">
          <router-link :to="{ path: '/createUser', query: { id: record.id } }">
            <a>{{ text }}</a>
          </router-link>
        </template>

        <template v-if="column.key === 'operation'">
          <a @click="deletes(record)">删除</a> |
          <router-link :to="{ path: '/createUser', query: { id: record.id } }">
            <a>编辑</a>
          </router-link>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { user_get, user_del } from "@/api/user";

const columns = [
  {
    title: "用户名",
    width: "20%",
    dataIndex: "username",
    key: "namusernamee",
  },
  {
    title: "邮箱",
    width: "20%",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "创建时间",
    dataIndex: "date_joined",
    key: "date_joined",
    width: "20%",
  },
  {
    title: "最近登录时间",
    dataIndex: "last_login",
    key: "last_login",
    width: "20%",
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
    const userGet = () => {
      user_get().then((res) => {
        data.value = res.data;
      });
    };
    userGet();
    const deletes = (record) => {
      user_del(record.id).then((res) => {
        if (res.code == 200) {
          message.success({
            content: "删除成功！",
            duration: 5,
          });
          userGet();
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
