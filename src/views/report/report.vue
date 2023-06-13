<template>
  <h1>{{ info.name }}</h1>
  <div class="info" style="width: 40%; float: left">
    <a-descriptions title="" bordered :column="1">
      <a-descriptions-item label="项目">{{ info.project }}</a-descriptions-item>
      <a-descriptions-item label="环境">{{ info.env }}</a-descriptions-item>
      <a-descriptions-item label="用例数">{{
        info.cases_count
      }}</a-descriptions-item>
      <a-descriptions-item label="执行时间">{{
        info.create_time
      }}</a-descriptions-item>
      <a-descriptions-item label="通过率"
        >{{
          100 - ((count.cases_result / count.cases_count) * 100).toFixed(2)
        }}%</a-descriptions-item
      >
    </a-descriptions>
  </div>
  <div>
    <div style="position: relative; top: 100px">
      <a-progress
        type="circle"
        :percent="((count.cases_false / count.cases_count) * 100).toFixed(2)"
        status="exception"
        :format="(percent) => `${percent} %`"
      />&nbsp;
        <a-progress
        type="circle"
        :percent="((count.skip / count.cases_count) * 100).toFixed(2)"
        strokeColor="#FFA500"
        :format="(percent) => `${percent} %`"
      />&nbsp;
      <a-progress
        type="circle"
        :percent="
          100 - ((count.cases_false / count.cases_count) * 100).toFixed(2)
        "
        :format="(percent) => `${percent} %`"
      >
        <template #format="percent">
          <span style="color: red">{{ percent }}</span>
        </template>
      </a-progress>
       <div style="margin: 10px;">    
          <a-tag color="#f50">失败：{{count.cases_false}}</a-tag>
          <a-tag color="#FFA500">跳过: {{count.skip}}</a-tag>
          <a-tag color="#87d068">通过：{{ count.cases_count-count.cases_false}}</a-tag>
      </div>
    </div>
  </div>
  <div class="cases">
    <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red"
      title="Basic Drawer"
      placement="right"
      width="520"
      @after-visible-change="afterVisibleChange"
    >
      <h2>
        {{ case_details.name }}
        <a-tag color="#f50" v-if="case_details.result == 'FALSE'">{{
          case_details.result
        }}</a-tag>
        <a-tag color="#FFA500" v-else-if="case_details.result =='SKIP'">{{ case_details.result }}</a-tag>

        <a-tag color="#87d068" v-else>{{ case_details.result }}</a-tag>
      </h2>
      <div class="test-result__content">
        <a-descriptions title="" :column="1">
          <a-descriptions-item label="runtime"
            >{{ case_details.runtaime }} ms</a-descriptions-item
          >

          <a-descriptions-item label="Name">{{
            case_details.name
          }}</a-descriptions-item>
          <a-descriptions-item label="method">{{
            case_details.method
          }}</a-descriptions-item>
          <a-descriptions-item label="URL">{{
            case_details.url
          }}</a-descriptions-item>
          <a-descriptions-item label="header">{{
            case_details.header
          }}</a-descriptions-item>
          <a-descriptions-item label="parameter">{{
            case_details.parameter
          }}</a-descriptions-item>
          <a-descriptions-item label="data">{{
            case_details.data
          }}</a-descriptions-item>
          <a-descriptions v-if="case_details.result != 'PASS'">
            <a-descriptions-item label="response">msg: {{
              case_details.assert_msg
            }}</a-descriptions-item> <br><br>
            <a-descriptions-item label="assert">response: {{
              case_details.response
            }}</a-descriptions-item>
          </a-descriptions>
        </a-descriptions>
      </div>
    </a-drawer>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template #bodyCell="{ column, record,text }">
      <template v-if="column.key === 'name'">
          <router-link :to="{path:'/debug',query:{id:record.id}}" >
              <a  >{{ text }}</a>
          </router-link>
      </template>
        <template v-if="column.key === 'result'">
        <a-tag color="#f50" v-if="record.result == 'FALSE'">{{
          record.result
        }}</a-tag>
        <a-tag color="#FFA500" v-else-if="record.result=='SKIP'">{{ record.result }}</a-tag>
        <a-tag color="#87d068" v-else>{{ record.result }}</a-tag>
        </template>
        <template v-if="column.key === 'operation'">
          <a-button type="primary" @click="showDrawer(record)">详情</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
// import axios from "axios";
import { message } from "ant-design-vue";
import { report_get } from "@/api/report";
import { useRouter } from "vue-router";

const columns = [
  {
    title: "Full Name",
    width: 250,
    dataIndex: "name",
    key: "name",
    fixed: "left",
    ellipsis: true,
  },
  // {
  //   title: "project",
  //   width: 150,
  //   dataIndex: "project",
  //   key: "project",
  //   fixed: "left",
  // },
  {
    title: "module",
    dataIndex: "module",
    key: "module",
    width: 150,
  },
  {
    title: "url",
    dataIndex: "url",
    key: "url",
    width: 350,
    ellipsis: true,
  },
  {
    title: "method",
    dataIndex: "method",
    key: "method",
    width:  '20%',
  },
  {
    title: "result",
    dataIndex: "result",
    key: "result",
    width:  '20%',
    ellipsis: true,
  },
  {
    title: "runtime(ms)",
    dataIndex: "run_time",
    key: "runtime",
    width:  '20%',
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
  },
];

export default defineComponent({
  setup() {
    const data = ref();
    const info = reactive({
      name: "",
      project: "",
      cases_count: "",
      create_time: "",
      env: "",
      passing_rate: "",
    });
    const count = reactive({
      cases_count: 0,
      cases_false: 0,
      skip:0,
    });
    const id = useRouter().currentRoute.value.query;
    report_get(id).then((res) => {
      if (res.code == 201) {
        message.error({
          content: res.msg,
          duration: 5,
        });
      }

      data.value = eval("(" + res.data[0].details + ")");
      const result = eval("(" + res.data[0].result + ")");
      count.cases_count = result.cases_count;
      count.cases_false = result.cases_false;
      count.skip = result.cases_skip
      console.log(count)
      info.project = res.data[0].project__name;
      info.env = res.data[0].env;
      info.create_time = res.data[0].create_time;
      info.cases_count = result.cases_count;
      info.name = res.data[0].name;
      case_details.project = res.data[0].project__name;
    });

    const visible = ref(false);

    const afterVisibleChange = (bool) => {
      console.log("visible", bool);
    };

    const case_details = reactive({
      name: "",
      project: "",
      url: "",
      method: "",
      module: "",
      header: "",
      parameter: "",
      data: "",
      asserts: "",
      response: "",
      runtaime: "",
      result: "",
      assert_msg:"",
    });

    const showDrawer = (record) => {
      visible.value = true;
      console.log(record);
      case_details.name = record.name;
      case_details.url = record.url;
      case_details.module = record.module;
      case_details.method = record.method;
      case_details.header = record.headers;
      case_details.parameter = record.parameter;
      case_details.data = record.data;
      case_details.response = record.response;
      case_details.result = record.result;
      case_details.runtaime = record.run_time;
      case_details.assert_msg = record.assert_msg
    };

    return {
      columns,
      data,
      count,
      info,
      visible,
      afterVisibleChange,
      showDrawer,
      case_details,
    };
  },
});
</script>
<style >
/* .ant-drawer-mask {
 
    background-color: rgba(0, 0, 0, 0.45);
  
} */
</style>
