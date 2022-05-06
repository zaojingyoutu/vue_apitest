<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="name" required>
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
     <a-form-item label="project" required  >
      <a-input v-model:value="modelRef.project" />
    </a-form-item>
    <a-form-item label="module" required>
      <a-input v-model:value="modelRef.module" />
    </a-form-item>
    <a-form-item label="url" required>
      <a-input v-model:value="modelRef.url" />
    </a-form-item>
    <a-form-item label="method" required>
      <a-select v-model:value="modelRef.method" placeholder="method">
        <a-select-option value="POST">POST</a-select-option>
        <a-select-option value="GET">GET</a-select-option>
        <a-select-option value="PUT">PUT</a-select-option>
        <a-select-option value="DELETE">DELETE</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="header" required>
      <a-textarea v-model:value="modelRef.header" />
    </a-form-item>
    <a-form-item label="parameter" required>
      <a-textarea v-model:value="modelRef.parameter" />
    </a-form-item>
    <a-form-item label="data" required>
      <a-textarea v-model:value="modelRef.data" />
    </a-form-item>
    <a-form-item label="asserts" required>
      <a-textarea v-model:value="modelRef.asserts" />
    </a-form-item>

    <a-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }" v-bind="errorInfos">
      <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { reactive, toRaw, computed, defineComponent } from 'vue';
import { toArray } from 'lodash-es';
import { Form } from 'ant-design-vue';
import {useRouter } from 'vue-router';
import { message } from "ant-design-vue";
import {cases_get,cases_api} from '@/api/cases'


const useForm = Form.useForm;
export default defineComponent({

  setup() {
         const router = useRouter();

    const project = useRouter().currentRoute.value.query
// console.log('222222222222222222',( useRouter().currentRoute.value.query.id))
    if (useRouter().currentRoute.value.query.id != undefined){
      cases_get(useRouter().currentRoute.value.query)
      .then(res=>{console.log(res)
          modelRef.name = res.data[0].name,
           modelRef.project =res.data[0].project,
           modelRef.url =res.data[0].url,
           modelRef.method =res.data[0].method,
           modelRef.module =res.data[0].module,
           modelRef.parameter =res.data[0].parameter,
           modelRef.header =res.data[0].header,
           modelRef.data =res.data[0].data,
           modelRef.asserts =res.data[0].asserts,
           modelRef.id =res.data[0].id
          });
    }

    const modelRef = reactive({
      name: '',
      project: project.projectid ,
      url: '',
      method: [],
      header: '',
      parameter: '',
      data: '',
      asserts: '',
      id: '',
    });

    const rulesRef = reactive({
      name: [{
        required: true,
        message: 'Please input name',
      }],

      method: [{
        required: true,
        message: 'Please select method',
        method: 'array',
      }],
      // project: [{
      //   required: true,
      //   message: 'Please input project',
      // }],
      module: [{
        required: true,
        message: 'Please input module',
      }],
      url: [{
        required: true,
        message: 'Please input url',
      }],

      header: [{
        required: true,
        message: 'Please input header',
      }],
      parameter: [{
        required: true,
        message: 'Please input parameter',
      }],
      data: [{
        required: true,
        message: 'Please input data',
      }],
      asserts: [{
        required: true,
        message: 'Please input asserts',
      }],
    });

    const {
      resetFields,
      validate,
      validateInfos,
      mergeValidateInfo,
    } = useForm(modelRef, rulesRef);


    const onSubmit = () => {
      // console.log(useRouter().currentRoute.value.query.projectid)
      validate().then(() => {
        console.log(toRaw(modelRef));
        var req_method
        if (project.id == undefined) {
          // console.log('1111111111111111111111',project.id)
          req_method = 'post'
        }else {
          req_method = 'put'
        }
        cases_api(modelRef,req_method)
        .then((res) => {
                message.success({
                content: res.msg,
                duration: 5
                });
                if (res.code == 200){
                             router.push({path:'case',query:{project_id:project.project_id}})

                  // window.location.href="case?project_id=" + project.project_id ;
                }
           });
      }).catch(err => {
        console.log('error', err);
      });
    };

    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });
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
    };
  },



});


</script>
<style scoped>
.error-infos :deep(.ant-form-explain) {
  white-space: pre-line;
}
</style>