<template>
  <a-tabs v-model:activeKey="activeKey">
    <template #rightExtra>
      <a-button type="primary" @click.prevent="onSubmit">Submit</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">Reset </a-button>
    </template>
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
          <a-form-item label="用户变量">
            <a-textarea
              v-model:value="modelRef.user_variables"
              style="margin-top: 0px; margin-bottom: 0px; height: 150px"
            />
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
          :customRow="customRow"
        >
          <template #bodyCell="{ record, column, text }">
            <template v-if="column.dataIndex === 'name'">
              <router-link
                :to="{ path: '/apiDetail', query: { id: record.id } }"
              >
                <a>{{ text }}</a>
              </router-link>
            </template>
            <template v-if="column.dataIndex === 'operation'">
              <a @click="deletes(record)">Delete</a>
              <a
                @click="showModal(record)"
                type="primary"
                style="padding-right: 15px"
              >
                | 编辑</a
              >
              <MenuOutlined />
            </template>
          </template>
        </a-table>

        <div>
          <a-modal
            wrap-class-name="full-modal"
            v-model:visible="visible2.state"
            :title="detail.name"
            width="680px"
            @ok="handleOk2(record)"
          >
            <a-tabs v-model:activeKey="activeKey2" style="padding: 4px">
              <a-tab-pane key="4" tab="data">
                <a-textarea
                  v-model:value="detail.data"
                  style="margin-top: 0px; margin-bottom: 0px; height: 300px"
                />
              </a-tab-pane>
              <a-tab-pane key="5" tab="header" force-render>
                <a-textarea
                  v-model:value="detail.header"
                  style="margin-top: 0px; margin-bottom: 0px; height: 300px"
                />
              </a-tab-pane>
              <a-tab-pane key="6" tab="parameter">
                <a-textarea
                  v-model:value="detail.parameter"
                  style="margin-top: 0px; margin-bottom: 0px; height: 300px"
                />
              </a-tab-pane>
              <a-tab-pane key="7" tab="变量提取">
                <div style="height: 300px">
                  <a-form
                    ref="formRef"
                    name="dynamic_form_nest_item"
                    :model="modelRef.case_list"
                    @finish="onFinish"
                  >
                    <a-space
                      v-for="(variable, index) in detail.variable"
                      :key="variable.id"
                      style="display: flex; margin-bottom: 8px"
                      align="baseline"
                    >
                      <a-select
                        ref="select"
                        v-model:value="variable.mold"
                        style="width: 100px"
                        @focus="focus"
                        placeholder="提取类型"
                      >
                        <a-select-option value="response"
                          >response</a-select-option
                        >
                        <a-select-option value="parameter"
                          >parameter</a-select-option
                        >
                        <a-select-option value="data">data</a-select-option>
                        <a-select-option value="None">无</a-select-option>
                      </a-select>

                      <a-select
                        ref="select"
                        v-model:value="variable.type"
                        style="width: 100px"
                        @focus="focus"
                        placeholder="提取方式"
                      >
                        <a-select-option value="jmespath"
                          >jmespath</a-select-option
                        >
                        <a-select-option value="re">正则</a-select-option>
                        <a-select-option value="json">json提取</a-select-option>
                        <a-select-option value="code">code提取</a-select-option>
                      </a-select>
                      <div v-if="variable.type === 'code'">
                        <div>
                          <a-button
                            type="primary"
                            @click="caseVariableShowModal(variable)"
                            >查看/编辑</a-button
                          >
                          <a-modal
                            v-model:visible="caseVisible"
                            style="width: 50%"
                            title="code"
                            @ok="caseVariableHandleOk(index)"
                          >
                            <MyCodemirror
                              v-model:value="caseVariableCode.value"
                              style="height: 200px"
                            ></MyCodemirror>
                            响应数据：response.json()
                            全局变量设置：set_global_svariate(dict)
                            局部变量设置：self.set_variate(key,value)
                          </a-modal>
                        </div>
                      </div>
                      <div class="extractVariable" v-else>
                        <a-form-item
                          class="item"
                          :name="['cases', index, 'value']"
                          :rules="{
                            // required: true,
                            message: 'Missing value',
                          }"
                        >
                          <a-input
                            v-model:value="variable.value"
                            placeholder="公式"
                          />
                        </a-form-item>
                        <a-form-item
                          class="item"
                          :name="['cases', index, 'name']"
                          :rules="{
                            // required: true,
                            message: 'Missing  name',
                          }"
                        >
                          <a-input
                            v-model:value="variable.name"
                            placeholder="变量名称"
                          />
                        </a-form-item>
                      </div>

                      <MinusCircleOutlined
                        @click="removeVariable(detail.variable, variable)"
                      />
                    </a-space>
                    <a-form-item>
                      <a-button
                        type="dashed"
                        block
                        @click="addVariable(detail)"
                      >
                        <PlusOutlined />
                        添加变量
                      </a-button>
                    </a-form-item>
                  </a-form>
                </div>
              </a-tab-pane>
              <a-tab-pane key="8">
                <template #tab>
                  <span> asserts </span>
                </template>
                <a-form
                  ref="formRef"
                  name="dynamic_form_nest_item"
                  @finish="onFinish"
                >
                  <a-space
                    v-for="assert in detail.asserts"
                    :key="assert.id"
                    style="display: flex; margin-bottom: 8px"
                    align="baseline"
                  >
                    <a-select
                      ref="select"
                      v-model:value="assert.mold"
                      style="width: 120px"
                      @focus="focus"
                      placeholder="断言类型"
                    >
                      <a-select-option value="response"
                        >response</a-select-option
                      >
                      <a-select-option value="Status">响应状态</a-select-option>
                      <a-select-option value="None">无</a-select-option>
                    </a-select>

                    <a-form-item>
                      <a-input
                        v-model:value="assert.value"
                        v-if="assert.mold == 'response'"
                        placeholder="请填写断言json"
                      />
                      <a-input
                        v-model:value="assert.value"
                        v-else
                        placeholder="请填写响应状态码"
                      />
                    </a-form-item>
                    <MinusCircleOutlined @click="removeAssert(assert)" />
                  </a-space>
                  <a-form-item>
                    <a-button type="dashed" block @click="addAssert">
                      <PlusOutlined />
                      添加断言
                    </a-button>
                  </a-form-item>
                </a-form>
              </a-tab-pane>
            </a-tabs>
          </a-modal>
        </div>

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
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import { reactive, computed, defineComponent, ref, toRefs } from "vue";
import { toArray } from "lodash-es";
import { Form } from "ant-design-vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { testplan_get, testplan_api } from "@/api/testplan";
import { cases_get } from "@/api/cases";
import axios from "axios";
import { project_get } from "@/api/project";
import { MinusCircleOutlined, MenuOutlined } from "@ant-design/icons-vue";
import MyCodemirror from "@/components/VueCodemirror.vue";

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
    MinusCircleOutlined,
    MenuOutlined,
    MyCodemirror,
  },
  setup() {
    const router = useRouter();

    const planid = useRouter().currentRoute.value.query;
    if (useRouter().currentRoute.value.query.id != undefined) {
      testplan_get(useRouter().currentRoute.value.query).then((res) => {
        (modelRef.name = res.data[0].name),
          (modelRef.describe = res.data[0].describe),
          (modelRef.id = res.data[0].id);
        modelRef.env = res.data[0].env;
        modelRef.project_id = res.data[0].project;
        modelRef.email = res.data[0].email;
        modelRef.user_variables = res.data[0].user_variables || "";
        formState.project_id = res.data[0].project;
        modelRef.case_list = res.data[0].case_list;
        if (modelRef.case_list.length != 0) {
          for (let i = 0; i < modelRef.case_list.length; i++) {
            state.selectedRowKeys.push(modelRef.case_list[i].id);
            tmpCaseIds.selectedRowKeys.push(modelRef.case_list[i].id);
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
      user_variables: "",
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
    const case_list_add_srot = (case_list) => {
      for (let i = 0; i < case_list.length; i++) {
        modelRef.case_list[i]["sort"] = i;
      }
    };

    const onSubmit = () => {
      case_list_add_srot(modelRef.case_list);
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
      } else {
        modelRef.case_list.push(...tmpCaseIds.selectedRows);
      }

      visible.value = false;
    };

    const formRef = ref();

    const onFinish = (values) => {
      console.log("Received values of form:", values);
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
        label: "开发环境",
      },
      {
        value: "1",
        label: "测试环境",
      },
      {
        value: "2",
        label: "线上环境",
      },
    ]);

    const focus = () => {};

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
    });

    // 删除添加的用例
    const deletes = (record) => {
      const index = modelRef.case_list.indexOf(record);

      modelRef.case_list.splice(index, 1);
      const keyIndex = state.selectedRowKeys.indexOf(record.id);
      delete state.selectedRowKeys[keyIndex];
    };

    const getCheckboxProps = (record) => ({
      disabled: tmpCaseIds.selectedRowKeys.includes(record.id),
    });
    const detail = reactive({
      name: "",
      id: "",
      data: "",
      header: "",
      parameter: "",
      variable: "",
      asserts: [],
    });

    const visible2 = ref({ record: "", state: false });
    const showModal = (record) => {
      visible2.value.state = true;
      visible2.value.record = record;
      detail.id = record.id;
      detail.name = record.name;
      detail.header = record.header;
      detail.data = record.data;
      detail.parameter = record.parameter;
      detail.variable = record.variable;
      detail.asserts = record.asserts || [];
      detail.project__name = record.project__name;
      detail.module = record.module;
    };
    const handleOk2 = () => {
      let details = { ...detail };
      const index = modelRef.case_list.indexOf(visible2.value.record);
      modelRef.case_list[index] = details;
      visible2.value.state = false;
    };
    const removeVariable = (record, item) => {
      let index = record.indexOf(item);
      if (index !== -1) {
        record.splice(index, 1);
      }
    };
    // 添加变量提取
    const addVariable = (record) => {
      if ((record.variable || null) == null) {
        record["variable"] = [];
      }

      record.variable.push({
        mold: "response",
        value: "",
        name: "",
        runRelation: false,
        runTeardown: false,
      });
    };

    // 添加断言
    const removeAssert = (item) => {
      let index = detail.asserts.indexOf(item);
      if (index !== -1) {
        detail.asserts.splice(index, 1);
      }
    };

    const addAssert = () => {
      detail.asserts.push({
        value: "",
        mold: "response",
      });
    };
    let change1;
    function customRow(record, index) {
      let change2;
      return {
        props: {
          // draggable: 'true'
        },
        style: {
          cursor: "pointer",
        },
        // 鼠标移入
        onMouseenter: (event) => {
          // 兼容IE
          var ev = event || window.event;
          ev.target.draggable = true; // 让你要拖动的行可以拖动，默认不可以
        },
        // 开始拖拽

        onDragstart: (event) => {
          // 兼容IE
          var ev = event || window.event;
          // 阻止冒泡
          ev.stopPropagation();
          // 得到源目标数据序号
          change1 = index;
        },
        // 拖动元素经过的元素
        onDragover: (event) => {
          // 兼容 IE
          var ev = event || window.event;
          // 阻止默认行为
          ev.preventDefault();
        },
        // 鼠标松开
        onDrop: (event) => {
          // 兼容IE
          var ev = event || window.event;
          // 阻止冒泡
          ev.stopPropagation();
          // 得到目标数据序号
          change2 = index;
          // // 这里就是让数据位置互换，让视图更新 你们可以看record，index的输出，看是什么
          if (change1 < change2) {
            const startObj = modelRef.case_list[change1];
            modelRef.case_list.splice(change2 + 1, 0, startObj);
            modelRef.case_list.splice(change1, 1);
          } else if (change1 > change2) {
            const startObj = modelRef.case_list[change1];
            modelRef.case_list.splice(change2, 0, startObj);
            modelRef.case_list.splice(change1 + 1, 1);
          }
        },
      };
    }
    const caseVariableCode = reactive({
      value: "",
    });

    const caseVisible = ref(false);
    const caseVariableShowModal = (testcase) => {
      caseVariableCode.value = "";
      caseVariableCode.value = testcase.value;
      caseVisible.value = true;
    };
    const caseVariableHandleOk = (index) => {
      detail.variable[index].value = caseVariableCode.value;
      caseVisible.value = false;
    };
    const reportUrl = "/reportList?testplan_id=" + planid.id;
    return {
      removeAssert,
      reportUrl,
      removeVariable,
      addVariable,
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
      visible2,
      showModal,
      handleOk2,
      detail,
      activeKey2: ref("4"),
      addAssert,
      customRow,
      caseVisible,
      caseVariableShowModal,
      caseVariableHandleOk,
      caseVariableCode,
    };
  },
});
</script>

<style >
.extractVariable {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 0%;
}
.item {
  flex: 0 0 auto;
  border: "";
}
</style>