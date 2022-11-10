<template>
        <h1>时区转换</h1>
     <dev class="time cycle" style="width:50%;height:200px;float: left;" >
         <div class="input" style="margin: auto;width: 50%;">
                <a-form :label-col="labelCol" :wrapper-col="wrapperCol" style="width:500px;height:200px;">
                <a-form-item label="转换时间" required>
                <a-input v-model:value="modelRef.date" style="width: 200px;    right: 26%;" />
                </a-form-item>
                <a-form-item label="当前时区" required>
              <a-select
                v-model:value="modelRef.now_timezone"
                show-search
                placeholder="Select a person"
                style="width: 200px;    right: 26%;"
                :options="options"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
              ></a-select>
                </a-form-item>
                <a-form-item label="目标时区" required>
                    <a-select
                v-model:value="modelRef.timezone"
                show-search
                placeholder="Select a person"
                style="width: 200px;    right: 26%;"
                :options="options"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
              ></a-select>
                </a-form-item>

                <a-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click.prevent="onSubmit">提交</a-button>
                <a-button style="margin-left: 10px" @click="resetFields">重置</a-button>
                    <a-button style="margin-left: 10px" @click="swap">时区互换</a-button>
                </a-form-item>
        </a-form>
         </div>

     </dev>
     <div class="cycleDate" style="float: right;width:50%;">
        <div style="background: #ececec; padding: 30px ;width:350px;margin: auto;">
            <a-card title="目标时间" :bordered="false" style="width: 300px">
            <p>{{modelRef.cycleDate.date}}</p>
            </a-card>
        </div>
     </div>      
</template>
<script>
import { reactive, ref,defineComponent} from 'vue';
import { Form } from 'ant-design-vue';
import {timezone_post} from '@/api/timezone'
import { message } from "ant-design-vue";

const useForm = Form.useForm;
var data = {
  date: '',
};

export default defineComponent({
  setup() {
    const modelRef = reactive({
      date: '2022-07-19 16:50',
      now_timezone: 'America/Los_Angeles',
      timezone: 'Asia/Shanghai',
      cycleDate:''  
    });
    const timeZoneList = [];



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

    const swap =() =>{
        let timezone = modelRef.timezone
        modelRef.timezone = modelRef.now_timezone
        modelRef.now_timezone = timezone
    }

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

    const options = ref([]);

    const handleChange = value => {
      console.log(`selected ${value}`);
    };

    const handleBlur = () => {
      console.log('blur');
    };

    const handleFocus = () => {
      console.log('focus');
    };

    const filterOption = (input, option) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };



    return {
      validateInfos,
      reset,
      modelRef,
      onSubmit,
      data,
        timeZoneList,
              value: ref(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
      options,
        swap
    };
  },

});
</script>