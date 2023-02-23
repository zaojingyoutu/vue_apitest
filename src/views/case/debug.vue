<template>
  <div class="Breadcrumb" style="text-align: left;height: 30px;">
    <a-breadcrumb>
      <a-breadcrumb-item>
        <router-link :to="{path:'/case',query:{project_id:project.project_id}}" >
                <a  >用例列表</a>
            </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>用例详情</a-breadcrumb-item>
    </a-breadcrumb>

  </div>
  <div>
    <div>
    <div class="describe" style="float: right;width: 40%" >
        <a-collapse ghost >
            <a-collapse-panel key="1" header="描述" >
                <a-textarea v-model:value="modelRef.describe" placeholder="请添加" :rows="4" />
            </a-collapse-panel>
          <router-link :to="{path:'/variate_list',query:{project: modelRef.project,env:modelRef.env}} " target="_blank" >全局变量管理</router-link>
        </a-collapse>
    </div>
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
    <div class="type" style="right: 50%; width: 300px; float: left;height: 32px;">
      <a-form-item label="环境：">
      <a-select
      ref="select"
      v-model:value="modelRef.env"
      style="width: 120px"
      :options="options1"
      @focus="focus"
      @change="handleChange"
    ></a-select>
        <br /><br />
      </a-form-item>
    </div>
    <div class="project" style="width: 600px">
      <a-form-item label="项目：">
        <div class="selectEnv" style="float: left;">
              <a-select
            ref="select"
            v-model:value="modelRef.project"
            style="width: 120px"
            :options="optionsProject"
            @focus="focus"
            @change="handleChange"
          ></a-select>
        </div>
      </a-form-item>
    </div>
    <div class="module" style="right: 50%;width: 300px">
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
          style="margin-top: 0px; margin-bottom: 0px; height: 460px"
        />
      </a-tab-pane>
      <a-tab-pane key="4">
        <template #tab>
          <span> asserts </span>
        </template>
        <a-form
          ref="formRef"
          name="dynamic_form_nest_item"
          :model="dynamicValidateForm"
          @finish="onFinish"
        >
          <a-space
            v-for="assert in modelRef.asserts"
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
              <a-select-option value="response">response</a-select-option>
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
      <a-tab-pane key="5">
        <template #tab>
          <span> setup </span>
        </template>
<associatedCases :associations="modelRef.setup" @update:associations ='setup => associations = modelRef.setup '></associatedCases>
      </a-tab-pane>
      <a-tab-pane key="6">
        <template #tab>
          <span> response </span>
        </template>
        <p style="float: right" >  响应状态：{{ modelRef.status }} 运行时间：{{ modelRef.run_time }}</p>
        <a-textarea
          v-model:value="modelRef.response"
          style="margin-top: 0px; margin-bottom: 0px; height: 460px"
        />
      </a-tab-pane>
      <a-tab-pane key="7">
        <template #tab>
          <span> teardown </span>
        </template>
        <associatedCases :associations="modelRef.teardown" @update:associations ='teardown => associations = modelRef.teardown '></associatedCases>
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
  </div>

</template>
<script>
import { reactive, computed, defineComponent, toRefs } from "vue";
import { toArray } from "lodash-es";
import { Form } from "ant-design-vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { ref } from "vue";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { cases_get, cases_api } from "@/api/cases";
// import MyCodemirror from "@/components/VueCodemirror.vue";
import {project_get} from '@/api/project'
import {deBug_post} from '@/api/deBug'
import associatedCases from "@/components/associatedCases.vue";


const useForm = Form.useForm;
export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
    // MyCodemirror,
    associatedCases

  },
  setup() {
    const dynamicValidateForm = reactive({
      cases: [],
    });
    const router = useRouter();
    const project = useRouter().currentRoute.value.query;
    if (useRouter().currentRoute.value.query.id != undefined) {
      cases_get(useRouter().currentRoute.value.query).then((res) => {
        (modelRef.name = res.data[0].name),
          (modelRef.project = res.data[0].project),
          (modelRef.url = res.data[0].url),
          (modelRef.method = res.data[0].method),
          (modelRef.module = res.data[0].module),
          (modelRef.parameter = res.data[0].parameter),
          // (modelRef.asserts = res.data[0].asserts),
          (modelRef.id = res.data[0].id),
          (modelRef.setup = res.data[0].setup),
           (modelRef.describe = res.data[0].describe),
                (modelRef.teardown = res.data[0].teardown),
          (modelRef.header = res.data[0].header);

        const a = res.data[0].data;

        if (a.includes("{")) {
          modelRef.data = JSON.stringify(JSON.parse(a), null, 2);
        } else {
          modelRef.data = res.data[0].data;
        }
        if (res.data[0].asserts != null) {
        // modelRef.asserts = eval("(" + res.data[0].asserts + ")");
        modelRef.asserts = res.data[0].asserts ;

        }
      });
    }

    const modelRef = reactive({
      name: "",
      project: '',
      url: "",
      method: [],
      header: "",
      parameter: "",
      data: "",
      asserts: [],
      id: "",
      response: "",
      setup: { code: "", relation: [] },
      teardown: { code: "", relation: [] },
      env: "0",
      result: "",
      relation: "",
      run_time: "",
      status,
      describe: '',
    });

    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: "Please input name",
        },
      ],

      method: [
        {
          required: true,
          message: "Please select method",
          method: "array",
        },
      ],
      module: [
        {
          required: true,
          message: "Please input module",
        },
      ],
      url: [
        {
          required: true,
          message: "Please input url",
        },
      ],

      header: [
        {
          required: true,
          message: "Please input header",
        },
      ],
      parameter: [
        {
          required: true,
          message: "Please input parameter",
        },
      ],
      data: [
        {
          required: true,
          message: "Please input data",
        },
      ],
      asserts: [
        {
          required: true,
          message: "Please input asserts",
        },
      ],
    });

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
      delete modelRef["run_time"];
      delete modelRef["status"];
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
           router.push({path:'case',query:{project_id:project.project_id}})
          // window.location.href = "case?project_id=" + project.project_id;
        }
      });
    };

    const debug = () => {
      (modelRef.relation = dynamicValidateForm.cases),
      deBug_post(modelRef).then((res) => {
        message.success({
          content: res.msg,
          duration: 5,
        });
        try {
          if (res.data.response.includes("{")) {
            modelRef.response = JSON.stringify(
              JSON.parse(res.data.response),
              null,
              2
            );

          }else{modelRef.response = res.data.response}
        } catch {
          modelRef.response = res.data;
        }
        modelRef.result = JSON.stringify(res.data.result, null, 2);
        modelRef.run_time = res.data.request_data.run_time
        modelRef.status =res.data.status_code
      });
    };

    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });

    const state = reactive({
      data: [],
      value: [],
      fetching: false,
    });
    const formRef = ref();

    const removeUser = (item) => {
      let index = dynamicValidateForm.cases.indexOf(item);

      if (index !== -1) {
        dynamicValidateForm.cases.splice(index, 1);
      }
    };



    const addUser = () => {
      dynamicValidateForm.cases.push({
        mold: "None",
        value: "",
        name: "",
        runRelation: false,
        runTeardown: false,
      });
    };

    const onFinish = (values) => {
      console.log("Received values of form:", values);
      console.log("dynamicValidateForm.users:", dynamicValidateForm.cases);
    };

    const removeAssert = (item) => {
      let index = modelRef.asserts.indexOf(item);

      if (index !== -1) {
        modelRef.asserts.splice(index, 1);
      }
    };

    const addAssert = () => {
      modelRef.asserts.push({
        value: "",
        mold: "response",
      });
    };
 
 const options1 = ref([{
      value: '0',
      label: '测试环境',
    }, {
      value: '1',
      label: '预发布环境',
    },  {
      value: '2',
      label: '线上环境',
    }]);
   

    const focus = () => {
      console.log('focus');
    };

    const handleChange = value => {
      console.log(`selected ${value}`);
    };

    const optionsProject = ref([])
    
    project_get().then((res) => {
        //  this.data =  res.data;    
        for (var i=0;i<(res.data).length;i++){
          optionsProject.value.push({value:res.data[i].id,label:res.data[i].name})
          if ( project.project_id ==res.data[i].id ){modelRef.project = res.data[i].id}
        }

        console.log(optionsProject.value);
     });

    return {
      addAssert,
      removeAssert,
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
      checked:ref(false),
      focus,
      handleChange,
      options1,
      optionsProject,
      project
   
    };
  },
});
</script>
<style scoped>
.error-infos :deep(.ant-form-explain) {
  white-space: pre-line;
}
</style>