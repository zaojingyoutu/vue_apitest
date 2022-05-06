<template>
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    placeholder="测试 placeholder"
    text-align="left"
    :height="200"
    @change="onChange"
    style="text-align: left"
  />
</template>

<script>
import Codemirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/python/python.js";


import { ref } from "vue";
export default {
  name: "MyCodemirror",
  props: {
    msg: String,
  },
  components: { Codemirror },
  setup() {
    const code = ref();

    return {
        
      code,
      cmOptions: {
        mode: "python", // 语言模式
        theme: "default", // 主题
        lineNumbers: true, // 显示行号
        smartIndent: true, // 智能缩进
        indentUnit: 2, // 智能缩进单位为4个空格长度
        foldGutter: true, // 启用行槽中的代码折叠
        styleActiveLine: true, // 显示选中行的样式
        completeSingle: false,
        lineWrapping: true,
      },
      onChange() {
        console.log(code);
        
      },
    };
  },
};
</script>