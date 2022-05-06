<template>
  <!-- <a-form-item label="name" style="left: 800px">-->
  <!--      <a-input v-model:value="modelRef.name" />-->
  <!--    </a-form-item>-->
  <div>
    <div class="name" style="right: 50%">
      <a-form-item label="用例名称：">
        <a-input
          v-model:value="modelRef.name"
          placeholder="用例标题"
          style="right: 20%; width: 50%"
        />
        <br /><br />
      </a-form-item>
    </div>
    <div class="type" style="right: 50%; width: 300px; float: left">
      <a-form-item label="环境：">
        <a-input
          v-model:value="modelRef.env"
          placeholder="环境"
          style="right: 20%; width: 50%"
        />
        <br /><br />
      </a-form-item>
    </div>
    <div class="project" style="width: 600px">
      <a-form-item label="项目：">
        <a-input
          v-model:value="modelRef.project"
          placeholder="项目"
          style="right: 20%; width: 50%"
        />
        <br /><br />
      </a-form-item>
    </div>
    <div class="module" style="width: 300px">
      <a-form-item label="模块：">
        <a-input
          v-model:value="modelRef.module"
          placeholder="模块"
          style="right: 20%; width: 50%"
        />
      </a-form-item>
    </div>
  </div>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="method" style="float: left">
      <a-select v-model:value="modelRef.method" placeholder="method">
        <a-select-option value="POST">POST</a-select-option>
        <a-select-option value="GET">GET</a-select-option>
        <a-select-option value="PUT">PUT</a-select-option>
        <a-select-option value="DELETE">DELETE</a-select-option>
      </a-select>
    </div>
    <div class="url" style="float: left; width: 800px">
      <a-input v-model:value="modelRef.url" placeholder="url" />
    </div>
    <div class="method" style="float: left">
      <a-button @click="debug">Send</a-button>
    </div>
    <div class="method" style="float: left">
      <a-button type="primary" @click.prevent="onSubmit">save</a-button>
    </div>
    <br /><br />

    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1">
        <template #tab>
          <span> header </span>
        </template>
        <!--          <a-form-item label="header" required>-->
        <a-textarea
          v-model:value="modelRef.header"
          style="margin-top: 0px; margin-bottom: 0px; height: 150px"
        />
        <!--    </a-form-item>-->
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <span> parameter </span>
        </template>
        <a-textarea
          v-model:value="modelRef.parameter"
          style="margin-top: 0px; margin-bottom: 0px; height: 150px"
        />
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #tab>
          <span> data </span>
        </template>
        <a-textarea
          v-model:value="modelRef.data"
          style="margin-top: 0px; margin-bottom: 0px; height: 150px"
        />
      </a-tab-pane>
      <a-tab-pane key="4">
        <template #tab>
          <span> asserts </span>
        </template>
        <a-textarea
          v-model:value="modelRef.asserts"
          style="margin-top: 0px; margin-bottom: 0px; height: 150px"
        />
        填写json数据进行响应断言，如果为'',表示跳过
      </a-tab-pane>
      <a-tab-pane key="5">
        <template #tab>
          <span> setup </span>
        </template>
        <MyCodemirror v-model:value="modelRef.setup"></MyCodemirror>
        <!-- <a-textarea v-model:value="modelRef.setup"  style="margin-top: 0px; margin-bottom: 0px; height: 150px;" /> -->
      </a-tab-pane>

      <a-tab-pane key="9">
        <template #tab>
          <span> 关联用例 </span>
        </template>
        <!--      <a-textarea v-model:value="modelRef.relation"  style="margin-top: 0px; margin-bottom: 0px; height: 150px;" />-->
        <a-form
          ref="formRef"
          name="dynamic_form_nest_item"
          :model="dynamicValidateForm"
          @finish="onFinish"
        >
          <a-space
            v-for="(testcase, index) in dynamicValidateForm.cases"
            :key="testcase.id"
            style="display: flex; margin-bottom: 8px"
            align="baseline"
          >
            <a-select
              v-model:value="testcase.case"
              show-search
              label-in-value
              placeholder="用例名称"
              style="width: 300px"
              :default-active-first-option="false"
              :show-arrow="false"
              :filter-option="false"
              :not-found-content="null"
              type="radio"
              :options="data"
              @search="fetchUser"
            >
              <template v-if="fetching" #notFoundContent>
                <a-spin size="small" />
              </template>
            </a-select>
            <a-select
              ref="select"
              v-model:value="testcase.mold"
              style="width: 120px"
              @focus="focus"
              placeholder="提取类型"
            >
              <a-select-option value="response">response</a-select-option>
              <a-select-option value="parameter">parameter</a-select-option>
              <a-select-option value="data">data</a-select-option>
              <a-select-option value="None">无</a-select-option>
            </a-select>

            <a-select
              ref="select"
              v-model:value="testcase.type"
              style="width: 120px"
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
              <a-input v-model:value="testcase.value" placeholder="公式" />
            </a-form-item>
            <a-form-item
              :name="['cases', index, 'name']"
              :rules="{
                // required: true,
                message: 'Missing  name',
              }"
            >
              <a-input v-model:value="testcase.name" placeholder="变量名称" />
            </a-form-item>
            <MinusCircleOutlined @click="removeUser(testcase)" />
          </a-space>
          <a-form-item>
            <a-button type="dashed" block @click="addUser">
              <PlusOutlined />
              Add 用例
            </a-button>
          </a-form-item>
          <!--    <a-form-item>-->
          <!--      <a-button type="primary" html-type="submit">Submit</a-button>-->
          <!--    </a-form-item>-->
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="6">
        <template #tab>
          <span> response </span>
        </template>
        <a-textarea
          v-model:value="modelRef.response"
          style="margin-top: 0px; margin-bottom: 0px; height: 150px"
        />
      </a-tab-pane>
      <a-tab-pane key="7">
        <template #tab>
          <span> teardown </span>
        </template>
        <a-form
          ref="formRef"
          name="dynamic_form_nest_item"
          :model="modelRef.teardown"
          @finish="onFinish"
        >
          <a-space
            v-for="(testcase, index) in modelRef.teardown"
            :key="testcase.id"
            style="display: flex; margin-bottom: 8px"
            align="baseline"
          >
            <a-select
              v-model:value="testcase.case"
              show-search
              label-in-value
              placeholder="用例名称"
              style="width: 300px"
              :default-active-first-option="false"
              :show-arrow="false"
              :filter-option="false"
              :not-found-content="null"
              type="radio"
              :options="data"
              @search="fetchUser"
            >
              <template v-if="fetching" #notFoundContent>
                <a-spin size="small" />
              </template>
            </a-select>
            <a-select
              ref="select"
              v-model:value="testcase.mold"
              style="width: 120px"
              @focus="focus"
              placeholder="提取类型"
            >
              <a-select-option value="response">response</a-select-option>
              <a-select-option value="parameter">parameter</a-select-option>
              <a-select-option value="data">data</a-select-option>
              <a-select-option value="None">无</a-select-option>
            </a-select>

            <a-select
              ref="select"
              v-model:value="testcase.type"
              style="width: 120px"
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
              <a-input v-model:value="testcase.value" placeholder="公式" />
            </a-form-item>
            <a-form-item
              :name="['cases', index, 'name']"
              :rules="{
                // required: true,
                message: 'Missing  name',
              }"
            >
              <a-input v-model:value="testcase.name" placeholder="变量名称" />
            </a-form-item>
            <MinusCircleOutlined @click="removecases(testcase)" />
          </a-space>
          <a-form-item>
            <a-button type="dashed" block @click="addcases">
              <PlusOutlined />
              Add 用例
            </a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="8">
        <template #tab>
          <span> asserts result </span>
        </template>
        <a-textarea
          v-model:value="modelRef.result"
          style="margin-top: 0px; margin-bottom: 0px; height: 150px"
        />
      </a-tab-pane>
    </a-tabs>
  </a-form>
</template>
<script>
import { reactive, computed, defineComponent, watch, toRefs } from "vue";
import { toArray } from "lodash-es";
import { Form } from "ant-design-vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { ref } from "vue";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { debounce } from "lodash-es";
import { cases_get, cases_api } from "@/api/cases";
import MyCodemirror from "@/components/VueCodemirror.vue";

const useForm = Form.useForm;
export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
    MyCodemirror,
  },
  setup() {
   
    
   

    const {
      resetFields,
      // validate,
      validateInfos,
      mergeValidateInfo,
    } = useForm(modelRef, rulesRef);

    const onSubmit = () => {
      (modelRef.relation = dynamicValidateForm.cases),
        delete modelRef["response"];
      delete modelRef["env"];
      delete modelRef["result"];
      var req_method;
      if (project.id == undefined) {
        req_method = "post";
      } else {
        req_method = "put";
      }
      cases_api(modelRef, req_method).then((res) => {
        message.success({
          content: res.msg,
          duration: 5,
        });
        if (res.code == 200) {
          window.location.href = "case?project_id=" + project.project_id;
        }
      });
    };

  
    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });

    let lastFetchId = 0;
    const state = reactive({
      data: [],
      value: [],
      fetching: false,
     });  

    const removeUser = (item) => {
      let index = dynamicValidateForm.cases.indexOf(item);

      if (index !== -1) {
        dynamicValidateForm.cases.splice(index, 1);
      }
    };
    const removecases = (item) => {
      let index = modelRef.teardown.indexOf(item);

      if (index !== -1) {
        modelRef.teardown.splice(index, 1);
      }
    };

    const addUser = () => {
      dynamicValidateForm.cases.push({
        mold: "response",
        value: "",
        name: "",
      });
    };

      const addcases = () => {
      modelRef.teardown.push({
        mold: "response",
        value: "",
        name: "",
      });
    };

    const onFinish = (values) => {
      console.log("Received values of form:", values);
      console.log("dynamicValidateForm.users:", dynamicValidateForm.cases);
    };

    return {
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
      debug,
      activeKey: ref("1"),
      formRef,
      dynamicValidateForm,
      onFinish,
      removeUser,
      addUser,
      ...toRefs(state),
      fetchUser,
      addcases,
      removecases,
    };
  },
});
</script>
<style scoped>
.error-infos :deep(.ant-form-explain) {
  white-space: pre-line;
}
</style>