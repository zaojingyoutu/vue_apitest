<template>
    <dev  style="width:50%;height:200px;float: left;" >
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol" style="width:500px;height:200px;margin: auto;">
                <a-form-item label="国家名称" required>
                <a-input v-model:value="modelRef.name" />
                </a-form-item>
                <a-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click.prevent="onSubmit">提交</a-button>
                <a-button style="margin-left: 10px" @click="resetFields">重置</a-button>
                </a-form-item>
        </a-form>
     </dev>
     <div  style="float: right;width:50%;">
        <div style="background: #ececec; padding: 30px ;width:350px;margin: auto;">
            <a-card title="手机号信息" :bordered="false" style="width: 300px;text-align:left">
                <p>国别号：{{modelRef.mobleInfo.country_code}}</p>
                <p>手机号：{{modelRef.mobleInfo.international_format}}</p>
<!--            <p>{{modelRef.mobleInfo}}</p>-->
            </a-card>
        </div>
     </div>
</template>
<script>
import { reactive, defineComponent} from 'vue';
import {getMobile} from '@/api/getMoble'
import { message } from "ant-design-vue";


export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '美国',
      mobleInfo:''
    });



    const onSubmit = () => {
        delete  modelRef.mobleInfo
      getMobile(modelRef).then(res=>{
          if(res.code != 200){
                message.error({
                content: res.msg,
                duration: 5
                });
                modelRef.ipDate = ''
          }else{
              message.success({
                content: res.msg,
                duration: 5
                });
                modelRef.mobleInfo = res.data
          }    
         
          })
    };

    const resetFields = () =>{
        modelRef.name = null
        modelRef.mobleInfo = null
    }
    return {
    resetFields,
      modelRef,
      onSubmit,

    };
  },

});
</script>