<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="name" required>
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
     <a-form-item label="describe" >
      <a-input v-model:value="modelRef.describe" />
    </a-form-item>
    <a-form-item label="start_time" required>
        <a-space direction="vertical" :size="12" style="float:left">
          <a-date-picker v-model:value="modelRef.start_time" />
        </a-space>
    </a-form-item>
    <a-form-item label="end_time" required>
       <a-space direction="vertical" :size="12" style="float:left">
          <a-date-picker v-model:value="modelRef.end_time" />
       </a-space>
    </a-form-item>
    <a-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }" v-bind="errorInfos">
      <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive, toRaw, computed, defineComponent,ref } from 'vue';
import { toArray } from 'lodash-es';
import { Form } from 'ant-design-vue';
import { message } from "ant-design-vue";
import {useRouter} from "vue-router";
import {project_get,project_api} from '@/api/project'


const useForm = Form.useForm;
export default defineComponent({

  setup() {
      const project = useRouter().currentRoute.value.query
// console.log(useRouter().currentRoute.value.query.projectid)
      if (useRouter().currentRoute.value.query.id != undefined){
          project_get(useRouter().currentRoute.value.query).then(res=>{console.log(res)
          modelRef.name = res.data[0].name,
           modelRef.describe =res.data[0].describe,
           modelRef.start_time =res.data[0].start_time,
           modelRef.end_time =res.data[0].end_time,
           modelRef.id =res.data[0].id
          });
    }

    const modelRef = reactive({
      name: '',
      describe: '',
      start_time: '',
      end_time: '',
        id: ''
    });

    const rulesRef = reactive({
      name: [{
        required: true,
        message: 'Please input name',
      }],

      describe: [{
        message: 'Please input describe',
      }],
      start_time: [{
        required: true,
        message: 'Please input start_time',
      }],
      end_time: [{
        required: true,
        message: 'Please input end_time',
      }],

    });
    const {
      resetFields,
      validate,
      validateInfos,
      mergeValidateInfo,
    } = useForm(modelRef, rulesRef);


    const onSubmit = () => {
      validate().then(() => {
        console.log(toRaw(modelRef));
         var req_method
        if (project.id == undefined) {
          // console.log('1111111111111111111111',project.id)
          req_method = 'post'
        }else {
          req_method = 'put'
        }
           project_api(modelRef,req_method).then((res) => {
                message.success({
                content: res.msg,
                duration: 5
                });
                if (res.code == 200){
                  window.location.href="/project";
                }
             console.log(res);
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
      value1: ref(),
    };
  },

});

</script>
<style scoped>
.error-infos :deep(.ant-form-explain) {
  white-space: pre-line;
}
</style>