<template>
  <h2 style="margin-top: 10px">use options (recommend)</h2>
  <a-space>
    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 120px"
      :options="options1"
      @focus="focus"
      @change="handleChange"
    ></a-select>
  </a-space>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
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

    return {
      focus,
      handleChange,
      value1: ref('0'),
      options1    
    };
  },

});
</script>