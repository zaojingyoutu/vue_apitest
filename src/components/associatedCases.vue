<template>
  <a-tabs
    :value="association"
    @change="$emit('update:associations', $event.target.value)"
  >
    <a-tab-pane key="1" tab="code">
      <MyCodemirror
        v-model:value="association.code"
        style="height: 200px"
      ></MyCodemirror>
      响应数据：response.json() 全局变量设置：set_global_svariate(dict)
      局部变量设置：self.set_variate(key,value)
    </a-tab-pane>
    <a-tab-pane key="2" tab="关联用例" force-render>
      <a-form
        ref="formRef"
        name="dynamic_form_nest_item"
        :model="association.relation"
        @finish="onFinish"
      >
        <VueDraggableNext
          v-model="association.relation"
          handle='.mover'
        >
          <transition-group>
            <a-space
              v-for="(testcase, index) in association.relation"
              :key="testcase.id"
              style="display: flex; margin-bottom: 8px"
              align="baseline"
            >
              <MenuOutlined  class="mover"/>
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

              <router-link
                v-if="testcase.case"
                :to="{
                  path: '/apiDetail',
                  query: {
                    id: testcase.case.value,
                  },
                }"
                target="_blank"
              >
                <a>to case</a>
              </router-link>

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
                <a-select-option value="code">code提取</a-select-option>
              </a-select>
              <div v-if="testcase.type === 'code'">
                <div>
                  <a-button type="primary" @click="showModal(testcase)"
                    >查看/编辑</a-button
                  >
                  <a-modal
                    v-model:visible="visible"
                    style="width: 50%"
                    title="code"
                    @ok="handleOk"
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
                  <a-input v-model:value="testcase.value" placeholder="公式" />
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
                    v-model:value="testcase.name"
                    placeholder="变量名称"
                  />
                </a-form-item>
              </div>
              <a-form-item>
                <a-checkbox v-model:checked="testcase.runRelation"
                  >是否执行前置处理</a-checkbox
                >
              </a-form-item>
              <a-form-item>
                <a-checkbox v-model:checked="testcase.runTeardown"
                  >是否执行后置处理</a-checkbox
                >
              </a-form-item>

              <MinusCircleOutlined @click="removeCases(testcase)" />
            </a-space>
          </transition-group>
        </VueDraggableNext>

        <a-form-item>
          <a-button type="dashed" block @click="addCase">
            <PlusOutlined />
            Add 用例
          </a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import MyCodemirror from "@/components/VueCodemirror.vue";
import { reactive, toRefs, watch, ref } from "vue";
import { debounce } from "lodash-es";
import { cases_get } from "@/api/cases";
import {
  MinusCircleOutlined,
  PlusOutlined,
  MenuOutlined,
} from "@ant-design/icons-vue";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  name: "associatedCases",
  props: {
    associations: { code: String, relation: [] },
  },
  emits: ["update:associations"],
  components: {
    MyCodemirror,
    MinusCircleOutlined,
    PlusOutlined,
    VueDraggableNext,
    MenuOutlined,
  },
  setup(props) {
    const onFinish = () => {
    };

    const prop = toRefs(props);
    const association = prop.associations.value;
    const addCase = () => {
      // eslint-disable-next-line vue/no-mutating-props
      association.relation.push({
        mold: "response",
        value: "",
        name: "",
        runRelation: false,
        runTeardown: false,
      });
    };
    let lastFetchId = 0;
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
        state.data = res.data.map((cases) => ({
          label: cases.name + "-" + cases.project__name + "-" + cases.module,
          value: cases.id,
          project: cases.project,
        }));
        state.fetching = false;
      });
      watch(state.value, () => {
        state.data = [];
        state.fetching = false;
      });
    }, 100);
    const removeCases = (item) => {
      let index = association.relation.indexOf(item);

      if (index !== -1) {
        association.relation.splice(index, 1);
      }
    };
    const caseVariableCode = reactive({
      caseId: "",
      value: "",
    });

    const visible = ref(false);
    const showModal = (testcase) => {
      visible.value = true;
      caseVariableCode.caseId = testcase.case.key;
      caseVariableCode.value = testcase.value;
    };
    const handleOk = () => {
      association.relation.forEach((item) => {
        if (item.case.key === caseVariableCode.caseId) {
          // 检查item的case对象是否包含key字段，并且key值是否等于你想要的值
          item.value = caseVariableCode.value; // 更新value字段
        }
      });
      visible.value = false;
      caseVariableCode.caseId = "";
      caseVariableCode.value = "";
    };

    return {
      association,
      onFinish,
      addCase,
      fetchUser,
      ...toRefs(state),
      removeCases,
      visible,
      showModal,
      handleOk,
      caseVariableCode,
    };
  },
};
</script>

<style >
.extractVariable {
  display: flex;
  flex-wrap: nowrap;
}
.item {
  flex: 0 0 auto;
  border: "";
}
</style>