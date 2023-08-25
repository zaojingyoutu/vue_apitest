<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="变量名" required>
      <a-input v-model:value="modelRef.key" />
    </a-form-item>
     <a-form-item label="变量值" >
      <a-input v-model:value="modelRef.value" />
    </a-form-item>
    <a-form-item label="环境" required>
      <div class="selectEnv" style="float: left;"> 
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
    <a-form-item label="项目" required>
      <!-- <a-input v-model:value="modelRef.project_id" /> -->
      <div class="selectEnv" style="float: left;"> 
              <a-select
            ref="select"
            v-model:value="modelRef.project_id"
            style="width: 120px"
            :options="optionsProject"
            @focus="focus"
            @change="handleChange"
          ></a-select>
        </div>
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
import {variate_get,variate_api} from '@/api/variate'
import {project_get} from '@/api/project'


const useForm = Form.useForm;
export default defineComponent({

  setup() {
      const router = useRouter();
      const project = useRouter().currentRoute.value.query
// console.log(useRouter().currentRoute.value.query.projectid)
      if (useRouter().currentRoute.value.query.id != undefined){
        variate_get(useRouter().currentRoute.value.query)
        .then(res=>{console.log(res)
          modelRef.key = res.data[0].key,
           modelRef.value =res.data[0].value,
           modelRef.env =res.data[0].env,
           modelRef.project_id =res.data[0].project,
           modelRef.id =res.data[0].id
          });
    }

    const modelRef = reactive({
      key: '',
      value: '',
      env: '0',
      project_id: '',

    });

    const rulesRef = reactive({
      key: [{
        required: true,
        message: 'Please input key',
      }],

      value: [{
        message: 'Please input value',
      }],
      start_time: [{
        required: true,
        message: 'Please input start_time',
      }],
      env: [{
        required: true,
        message: 'Please input env',
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
        variate_api(modelRef,req_method)
        .then((res) => {
                message.success({
                content: res.msg,
                duration: 5
                });
                if (res.code == 200){
                  // window.location.href="/variate_list";
                  router.push("/variate_list")
                }
             console.log(res);
           });
      }).catch(err => {
        console.log('error', err);
      });
    };

    const options1 = ref([{
      value: '0',
      label: '开发环境',
    }, {
      value: '1',
      label: '测试环境',
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

    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });

    const optionsProject = ref([])
    
    project_get().then((res) => {
        //  this.data =  res.data;    
        for (var i=0;i<(res.data).length;i++){
          optionsProject.value.push({value:res.data[i].id,label:res.data[i].name})
          if ( project.project_id ==res.data[i].id ){modelRef.project_id = res.data[i].id}
        }

        console.log(optionsProject.value);
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
      focus,
      handleChange,
      options1,
      optionsProject
    };
  },

});

</script>
<style scoped>
.error-infos :deep(.ant-form-explain) {
  white-space: pre-line;
}
</style>