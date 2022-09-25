<template>
        <h1>获取ip</h1>
     <dev class="time cycle" style="width:50%;height:200px;float: left;" >
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
     <div class="cycleDate" style="float: right;width:50%;">
        <div style="background: #ececec; padding: 30px ;width:350px;margin: auto;">
            <a-card title="目标ip" :bordered="false" style="width: 300px">
            <p>{{modelRef.ipDate.ip}}</p>
            </a-card>
        </div>
     </div>      
</template>
<script>
import { reactive, defineComponent} from 'vue';
import { Form } from 'ant-design-vue';
import {ip_get} from '@/api/ip'
import { message } from "ant-design-vue";

const useForm = Form.useForm;
var data = {
  date: '',
};

export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '美国',
      ipDate:''  
    });

    const {
      resetFields,
      validateInfos,
    } = useForm(modelRef, reactive({
      name: [{
        required: true,
        message: 'Please input name',
      }],
      'sub.name': [{
        required: true,
        message: 'Please input sub name',
      }],
    }));

    const onSubmit = () => {
      ip_get(modelRef).then(res=>{
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
                modelRef.ipDate = res.data
          }    
         
          })
    };

    const reset = () => {
      resetFields();
    };
    return {
      validateInfos,
      reset,
      modelRef,
      onSubmit,
      data
    };
  },

});
</script>