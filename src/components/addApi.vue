<template>
  <div>
    <a-button type="primary" @click="showDrawer('large')">添加接口 </a-button>
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
          <a @click="showModal(record)" type="primary"> | 编辑</a>
        </template>
      </template>
    </a-table>
    <div>
      <a-modal
        wrap-class-name="full-modal"
        v-model:visible="visible2.state"
        :title="detail.name"
        @ok="handleOk2(record)"
      >
        <a-tabs v-model:activeKey="activeKey" style="padding: 4px">
          <a-tab-pane key="1" tab="data">
            <a-textarea
              v-model:value="detail.data"
              style="margin-top: 0px; margin-bottom: 0px; height: 300px"
            />
          </a-tab-pane>
          <a-tab-pane key="2" tab="header" force-render>
            <a-textarea
              v-model:value="detail.header"
              style="margin-top: 0px; margin-bottom: 0px; height: 300px"
            />
          </a-tab-pane>
          <a-tab-pane key="3" tab="parameter">
            <a-textarea
              v-model:value="detail.parameter"
              style="margin-top: 0px; margin-bottom: 0px; height: 300px"
            />
          </a-tab-pane>
          <a-tab-pane key="4" tab="变量提取">
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
                    <a-select-option value="response">response</a-select-option>
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
                    <a-select-option value="jmespath">jmespath</a-select-option>
                    <a-select-option value="re">正则</a-select-option>
                    <a-select-option value="json">json提取</a-select-option>
                  </a-select>

                  <a-form-item
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

                  <MinusCircleOutlined
                    @click="removeVariable(detail.variable, variable)"
                  />
                </a-space>
                <a-form-item>
                  <a-button type="dashed" block @click="addVariable(detail)">
                    <PlusOutlined />
                    添加变量
                  </a-button>
                </a-form-item>
              </a-form>
            </div>
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
                <a-button type="primary" html-type="submit">Search </a-button>
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
</template>
<script>
import { reactive, computed, defineComponent, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { cases_get } from "@/api/cases";
import { project_get } from "@/api/project";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";

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

export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
  },
  props: {
    case_list: Object,
  },
  setup(props) {
    const data = ref();
    const modelRef = reactive({
      name: "",
      describe: "",
      project_id: "",
      case_list: props.case_list,
      email: "",
    });
    const count = reactive({
      cases_count: 0,
      cases_false: 0,
    });
    const detail = reactive({
      name: "",
      id: "",
      data: "",
      header: "",
      parameter: "",
      variable: "",
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

    const onFinish = () => {
      cases_get(formState).then((res) => {
        data.value = res.data;
        total.value = res.total;
      });
    };

    const state = reactive({
      selectedRowKeys: [],
      // Check here to configure the default column
      loading: false,
    });
    const hasSelected = computed(() => state.selectedRowKeys.length > 0);

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

    const focus = () => {
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
      detail.project__name = record.project__name;
      detail.module = record.module;
    };
    const handleOk2 = () => {
      const index = modelRef.case_list.indexOf(visible2.value.record);
      modelRef.case_list[index] = detail;
      visible2.value.state = false;
    };

    const removeVariable = (record, item) => {
      let index = record.indexOf(item);
      if (index !== -1) {
        record.splice(index, 1);
      }
    };
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

    return {
      formState,
      data,
      columns,
      activeKey: ref("1"),
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },

      modelRef,
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
      removeVariable,
      addVariable,
      detail,
    };
  },
});
</script>
<style >
.full-modal {
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: 50%;
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>