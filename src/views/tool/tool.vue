<template>
  <a-tabs v-model:activeKey="activeKey" centered>
    <a-tab-pane key="1" tab="时间转换">
        <timezone></timezone>
    </a-tab-pane>
    <a-tab-pane key="2" tab="获取ip" force-render>
        <getIp></getIp>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>
<script>
import { reactive, defineComponent,ref} from 'vue';
import { Form } from 'ant-design-vue';
import {timezone_post} from '@/api/timezone'
import { message } from "ant-design-vue";
import getIp from "@/components/getIp.vue";
import timezone from "@/components/timezone";


const useForm = Form.useForm;
var data = {
  date: '',
};

export default defineComponent({
    components: {getIp,timezone},
  setup() {
    const modelRef = reactive({
      date: '2022-07-19 16:50',
      now_timezone: 'America/Los_Angeles',
      timezone: 'Asia/Shanghai',
      cycleDate:''  
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
      timezone_post(modelRef).then(res=>{
          if(res.code != 200){
                message.error({
                content: res.msg,
                duration: 5
                });
          }else{
              message.success({
                content: res.msg,
                duration: 5
                });
                modelRef.cycleDate = res.data
          }
          
          console.log(res.msg, res.data,data.date)
          })
    };

    const reset = () => {
      resetFields();
    };


    return {
      activeKey: ref('1'),
      validateInfos,
      reset,
      modelRef,
      onSubmit,
      data
    };
  },

});
</script>