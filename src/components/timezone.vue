<template>
  <h1>时区转换</h1>
  <dev class="time cycle" style="width: 50%; height: 200px; float: left">
    <div class="input" style="margin: auto; width: 50%">
      <a-form
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        style="width: 500px; height: 200px"
      >
        <a-form-item label="转换时间" required>
          <a-input
            v-model:value="modelRef.date"
            style="width: 200px; right: 26%"
          />
        </a-form-item>
        <a-form-item label="当前时区" required>
          <a-select
            v-model:value="modelRef.now_timezone"
            show-search
            placeholder="Select a person"
            style="width: 200px; right: 26%"
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
            style="width: 200px; right: 26%"
            :options="options"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          ></a-select>
        </a-form-item>

        <a-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click.prevent="onSubmit">提交</a-button>
          <a-button style="margin-left: 10px" @click="resetFields"
            >重置</a-button
          >
          <a-button style="margin-left: 10px" @click="swap">时区互换</a-button>
        </a-form-item>
      </a-form>
    </div>
  </dev>
  <div class="cycleDate" style="float: right; width: 50%">
    <div style="background: #ececec; padding: 30px; width: 350px; margin: auto">
      <a-card title="目标时间" :bordered="false" style="width: 300px">
        <p>{{ modelRef.cycleDate.date }}</p>
      </a-card>
    </div>
  </div>
</template>
<script>
import { reactive, ref, defineComponent } from "vue";
import { timezone_post, timezone_get } from "@/api/timezone";
import { message } from "ant-design-vue";

export default defineComponent({
  setup() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let date = now.getDate();
    date = date < 10 ? "0" + date : date;
    let hour = now.getHours();
    hour = hour < 10 ? "0" + hour : hour;
    let minute = now.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;

    let dateTime = `${year}-${month}-${date} ${hour}:${minute}`;
    const modelRef = reactive({
      date: dateTime,
      now_timezone: "America/Los_Angeles",
      timezone: "Asia/Shanghai",
      cycleDate: "",
    });
    const timeZoneList = [];
    timezone_get().then((res) => {
      if (res.code !== 200) {
        message.error({
          content: res.msg,
          duration: 5,
        });
      } else {
        for (let i = 0; i < res.data.length; i++) {
          options.value.push({ value: res.data[i], label: res.data[i] });
        }
        timeZoneList.push(res.data);
      }
    });

    const swap = () => {
      let timezone = modelRef.timezone;
      modelRef.timezone = modelRef.now_timezone;
      modelRef.now_timezone = timezone;
    };

    const onSubmit = () => {
      timezone_post(modelRef).then((res) => {
        if (res.code != 200) {
          message.error({
            content: res.msg,
            duration: 5,
          });
        } else {
          message.success({
            content: res.msg,
            duration: 5,
          });
          modelRef.cycleDate = res.data;
        }
      });
    };

    const resetFields = () => {
      modelRef.date = null;
      modelRef.timezone = null;
      modelRef.now_timezone = null;
      modelRef.cycleDate = null;
    };

    const options = ref([]);

    const handleChange = () => {
    };

    const handleBlur = () => {
    };

    const handleFocus = () => {
    };

    const filterOption = (input, option) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    return {
      resetFields,
      modelRef,
      onSubmit,
      timeZoneList,
      value: ref(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
      options,
      swap,
    };
  },
});
</script>
