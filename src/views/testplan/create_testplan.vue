<template>
  <div class="title">测试计划</div>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="基本信息">
      <div>
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="name" required>
            <a-input v-model:value="modelRef.name" />
          </a-form-item>
          <a-form-item label="describe">
            <a-input v-model:value="modelRef.describe" />
          </a-form-item>
          <a-form-item label="env">
            <!-- <a-input v-model:value="modelRef.env" /> -->
            <div class="selectEnv" style="float: left">
              <a-select
                ref="select"
                v-model:value="modelRef.env"
                style="width: 120px"
                :options="options1"
                @focus="focus"
                @change="handleChange"
              ></a-select>
            </div>
          </a-form-item>
          <a-form-item label="project">
            <div class="selectEnv" style="float: left">
              <a-select
                ref="select"
                v-model:value="modelRef.project_id"
                style="width: 120px"
                :options="optionsProject"
              ></a-select>
            </div>
          </a-form-item>
          <a-form-item label="通知邮件">
            <a-input v-model:value="modelRef.email" />
          </a-form-item>
          <a-form-item
            class="error-infos"
            :wrapper-col="{ span: 14, offset: 4 }"
            v-bind="errorInfos"
          >
            <a-button type="primary" @click.prevent="onSubmit">Submit</a-button>
            <a-button style="margin-left: 10px" @click="resetFields"
              >Reset
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="添加用例" force-render>
      <div>
        <a-button type="primary" @click="showDrawer('large')"
          >添加用例
        </a-button>
        <a-table
          :dataSource="modelRef.case_list"
          :columns="columns"
          :pagination="false"
        >
          <template #bodyCell="{ record, column, text }">
            <template v-if="column.dataIndex === 'name'">
              <router-link :to="{ path: '/debug', query: { id: record.id } }">
                <a>{{ text }}</a>
              </router-link>
            </template>
            <template v-if="column.dataIndex === 'operation'">
              <a @click="deletes(record)">Delete</a>
            </template>
          </template>
        </a-table>

        <a-drawer
          title="Basic Drawer"
          :size="size"
          :visible="visible"
          @close="onClose"
        >
          <template #extra>
            <a-button style="margin-right: 8px" @click="Close">Cancel</a-button>
            <a-button type="primary" @click="onClose">Submit</a-button>
          </template>

          <div>
            <div class="SearchCases" style="margin-bottom: 10px">
              <a-form
                ref="formRef"
                name="advanced_search"
                class="ant-advanced-search-form"
                :model="formState"
                @finish="onFinish"
              >
                <a-row :gutter="24" style="float: left; height: 32px">
                  <a-form-item
                    :name="`name`"
                    :label="`name`"
                    :rules="[{ message: 'input something' }]"
                  >
                    <a-input
                      v-model:value="formState[`name`]"
                      placeholder="placeholder"
                    ></a-input>
                  </a-form-item>
                  <a-form-item label="project">
                    <div class="selectEnv" style="float: left">
                      <a-select
                        ref="select"
                        v-model:value="formState[`project_id`]"
                        style="width: 120px"
                        :options="optionsProject"
                      ></a-select>
                    </div>
                  </a-form-item>
                </a-row>
                <a-row>
                  <a-col :span="24" style="text-align: right">
                    <a-button type="primary" html-type="submit"
                      >Search
                    </a-button>
                    <a-button
                      style="margin: 0 8px"
                      @click="() => formRef.resetFields()"
                      >Clear
                    </a-button>
                  </a-col>
                </a-row>
              </a-form>
            </div>

            <a-table
              :row-selection="{
                selectedRowKeys: selectedRowKeys,
                onChange: onSelectChange,
                getCheckboxProps: getCheckboxProps,
              }"
              :row-key="(record) => record.id"
              :columns="columns"
              :data-source="data"
              :pagination="false"
            />
          </div>
        </a-drawer>
      </div>

      <addApi v-model="modelRef.case_list"></addApi>
    </a-tab-pane>
    <a-tab-pane key="3" tab="测试报告">
      <!-- <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
            <a-button type="primary" @click.prevent="onSubmit">Create</a-button> -->
      <a-button type="primary" @click="runplan">run</a-button>
      <br /><br />
      <div>
        运行用例数：{{ count.cases_count }} &nbsp; 失败用例数：{{
          count.cases_result
        }}
      </div>
      <!-- <a-progress type="circle" :percent="75" :format="percent => `${percent} %`"/> -->
      <a-progress
        type="circle"
        :percent="((count.cases_result / count.cases_count) * 100).toFixed(2)"
        status="exception"
        :format="(percent) => `${percent} %`"
      />&nbsp;
      <a-progress
        type="circle"
        :percent="
          100 - ((count.cases_result / count.cases_count) * 100).toFixed(2)
        "
        :format="(percent) => `${percent} %`"
      />
      <template #format="percent">
        <span style="color: red">{{ percent }}</span>
      </template>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import { reactive, toRaw, computed, defineComponent, ref, toRefs } from "vue";
import { toArray } from "lodash-es";
import { Form } from "ant-design-vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { testplan_get, testplan_api } from "@/api/testplan";
import { cases_get } from "@/api/cases";
import axios from "axios";
import { project_get } from "@/api/project";
import addApi from "@/components/addApi.vue";

// import { MinusCircleOutlined } from '@ant-design/icons-vue';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "project",
    dataIndex: "project__name",
  },
  {
    title: "module",
    dataIndex: "module",
  },
  {
    title: "操作",
    dataIndex: "operation",
  },
];

const useForm = Form.useForm;
export default defineComponent({
  components: {
    addApi,
  },
  setup() {
    const router = useRouter();

    const planid = useRouter().currentRoute.value.query;
    if (useRouter().currentRoute.value.query.id != undefined) {
      testplan_get(useRouter().currentRoute.value.query).then((res) => {
        console.log(res);
        (modelRef.name = res.data[0].name),
          (modelRef.describe = res.data[0].describe),
          (modelRef.id = res.data[0].id);
        modelRef.env = res.data[0].env;
        modelRef.project_id = res.data[0].project;
        modelRef.email = res.data[0].email;
        formState.project_id = res.data[0].project;
        if (res.data[0].case_list.includes("[")) {
          console.log();
          modelRef.case_list = eval("(" + res.data[0].case_list + ")");
          // modelRef.case_list =res.data[0].case_list

          if (modelRef.case_list.length != 0) {
            for (let i = 0; i < modelRef.case_list.length; i++) {
              state.selectedRowKeys.push(modelRef.case_list[i].id);
              tmpCaseIds.selectedRowKeys.push(modelRef.case_list[i].id);
            }
          }
        }
        modelRef.env = res.data[0].env;
      });
    }
    const data = ref();

    const modelRef = reactive({
      name: "",
      describe: "",
      env: "0",
      project_id: "",
      case_list: [],
      email: "",
    });
    const count = reactive({
      cases_count: 0,
      cases_false: 0,
    });

    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: "Please input name",
        },
      ],

      describe: [
        {
          message: "Please input describe",
        },
      ],
      start_time: [
        {
          required: true,
          message: "Please input start_time",
        },
      ],
      end_time: [
        {
          required: true,
          message: "Please input end_time",
        },
      ],
    });
    const { resetFields, validateInfos, mergeValidateInfo } = useForm(
      modelRef,
      rulesRef
    );

    const onSubmit = () => {
      console.log(toRaw(modelRef));
      var req_method;
      if (planid.id == undefined) {
        req_method = "post";
      } else {
        req_method = "put";
      }
      testplan_api(modelRef, req_method).then((res) => {
        message.success({
          content: res.msg,
          duration: 5,
        });
        if (res.code == 200) {
          router.push("/testplan");
        }
        console.log(res);
      });
    };

    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });

    const visible = ref(false);
    const size = ref("default");

    const showDrawer = (val) => {
      size.value = val;
      visible.value = true;
      cases_get(formState).then((res) => {
        data.value = res.data;
        console.log(state.selectedRowKeys);
      });
    };

    const Close = () => {
      visible.value = false;
    };

    const onClose = () => {
      tmpCaseIds.selectedRowKeys = state.selectedRowKeys;
      if (modelRef.case_list.length > 0) {
        const addRows = [...tmpCaseIds.selectedRows].filter((x) =>
          [...modelRef.case_list].every((y) => y.id !== x.id)
        );
        modelRef.case_list.push(...addRows);
        console.log(modelRef.case_list);
      } else {
        modelRef.case_list.push(...tmpCaseIds.selectedRows);
      }

      visible.value = false;
    };

    const formRef = ref();

    const onFinish = (values) => {
      console.log("Received values of form:", values);
      console.log(
        "modelRef.case_list",
        state.selectedRowKeys,
        modelRef.case_list
      );
      cases_get(formState).then((res) => {
        data.value = res.data;
        total.value = res.total;
      });
    };

    const runplan = () => {
      axios({
        method: "post",
        headers: { Authorization: localStorage.getItem("token") },
        url: "runtestplan/",
        data: planid,
      }).then((res) => {
        if (res.data.code == 200) {
          count.cases_count = res.data.data.count.cases_count;
          count.cases_result = res.data.data.count.cases_result;
          message.success({
            content: "运行成功！",
            duration: 5,
          });
          //  location.reload();
        } else {
          message.success({
            content: "运行失败！",
            duration: 5,
          });
        }

        console.log(res);
        console.log(res.data.data.result);
      });
    };

    const state = reactive({
      selectedRowKeys: [],
      // Check here to configure the default column
      loading: false,
    });
    const hasSelected = computed(() => state.selectedRowKeys.length > 0);

    const start = () => {
      state.loading = true; // ajax request after empty completing

      setTimeout(() => {
        state.loading = false;
        // state.selectedRowKeys = [];
      }, 1000);
    };

    const tmpCaseIds = reactive({
      selectedRowKeys: [],
      selectedRows: [],
    });

    // 添加用例
    const onSelectChange = (selectedRowKeys, selectedRows) => {
      console.log(
        "selectedRowKeys changed: ",
        selectedRowKeys,
        selectedRows,
        state.selectedRowKeys
      );
      state.selectedRowKeys = selectedRowKeys;
      tmpCaseIds.selectedRows = selectedRows;
    };

    const formState = reactive({});
    const total = ref();
    const onChange = (page) => {
      formState["current"] = page.current;
      cases_get(formState).then((res) => {
        data.value = res.data;
        total.value = res.total;
      });
    };

    const options1 = ref([
      {
        value: "0",
        label: "测试环境",
      },
      {
        value: "1",
        label: "预发布环境",
      },
      {
        value: "2",
        label: "线上环境",
      },
    ]);

    const focus = () => {
      console.log("focus");
    };

    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    const project = useRouter().currentRoute.value.query;

    const optionsProject = ref([]);

    project_get().then((res) => {
      //  this.data =  res.data;
      for (var i = 0; i < res.data.length; i++) {
        optionsProject.value.push({
          value: res.data[i].id,
          label: res.data[i].name,
        });
        if (project.project_id == res.data[i].id) {
          modelRef.project_id = res.data[i].id;
        }
      }

      console.log(optionsProject.value);
    });

    // 删除添加的用例
    const deletes = (record) => {
      const index = modelRef.case_list.indexOf(record);

      modelRef.case_list.splice(index, 1);
      const keyIndex = state.selectedRowKeys.indexOf(record.id);
      delete state.selectedRowKeys[keyIndex];
      console.log(index);
    };

    const getCheckboxProps = (record) => ({
      disabled: tmpCaseIds.selectedRowKeys.includes(record.id),
    });

    return {
      formState,
      data,
      columns,
      runplan,
      activeKey: ref("1"),
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
      errorInfos,
      value1: ref(),
      visible,
      size,
      showDrawer,
      onClose,
      formRef,
      onFinish,
      Close,
      count,
      hasSelected,
      ...toRefs(state),
      start,
      onSelectChange,
      total,
      onChange,
      focus,
      handleChange,
      options1,
      optionsProject,
      deletes,
      getCheckboxProps,
    };
  },
});
</script>