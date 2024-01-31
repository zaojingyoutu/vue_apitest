<template>
  <a-form
    ref="formRef"
    name="dynamic_form_nest_item"
    :model="dynamicValidateForm"
    @finish="onFinish"
    @change="changeCase"
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
          message: 'Missing value',
        }"
      >
        <a-input v-model:value="testcase.value" placeholder="公式" />
      </a-form-item>
      <a-form-item
        :name="['cases', index, 'name']"
        :rules="{
          message: 'Missing  name',
        }"
      >
        <a-input v-model:value="testcase.name" placeholder="变量名称" />
      </a-form-item>
      <a-form-item>
        <a-checkbox v-model:checked="testcase.runRelation"
          >是否执行前置处理</a-checkbox
        >
      </a-form-item>
      <a-form-item v-if="testcase.case?.key">
        <router-link :to="{ path: '/debug', query: { id: testcase.case.key } }">
          <a>用例详情</a>
        </router-link>
      </a-form-item>
      <MinusCircleOutlined @click="removeUser(testcase)" />
    </a-space>
    <a-form-item>
      <a-button type="dashed" block @click="addUser">
        <PlusOutlined />
        Add 用例
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { debounce } from "lodash-es";
import { cases_get } from "@/api/cases";
import { MinusCircleOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    MinusCircleOutlined,
  },
  name: "addCase",
  props: ["model"],
  setup() {
    const focus = () => {};
    const handleChange = () => {
      this.$emit("cases", dynamicValidateForm);
    };
    const removeUser = (item) => {
      let index = dynamicValidateForm.cases.indexOf(item);

      if (index !== -1) {
        dynamicValidateForm.cases.splice(index, 1);
      }
    };
    let lastFetchId = 0;
    const changeCase = () => {
    };
    const onFinish = () => {
    };
    const dynamicValidateForm = reactive({
      cases: [],
    });
    const addUser = () => {
      dynamicValidateForm.cases.push({
        mold: "response",
        value: "",
        name: "",
        runRelation: true,
      });
    };
    const state = reactive({
      data: [],
      value: [],
      fetching: false,
    });
    const fetchUser = debounce((value) => {
      lastFetchId += 1;
      const fetchId = lastFetchId;
      state.data = [];
      state.fetching = true;
      cases_get({ name: value }).then((res) => {
        if (fetchId !== lastFetchId) {
          // for fetch callback order
          return;
        }

        const data = res.data.map((cases) => ({
          label: cases.name + "-" + cases.project + "-" + cases.module,
          value: cases.id,
        }));
        state.data = data;
        state.fetching = false;
      });
      watch(state.value, () => {
        state.data = [];
        state.fetching = false;
      });
    }, 100);

    // eslint-disable-next-line vue/no-dupe-keys
    return {
      fetchUser,
      onFinish,
      changeCase,
      dynamicValidateForm,
      addUser,
      focus,
      handleChange,
      removeUser,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
</style>