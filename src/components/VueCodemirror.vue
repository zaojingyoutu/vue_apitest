<template>
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    placeholder="测试 placeholder"
    text-align="left"
    @change="onChange"
    style="text-align: left"
  />
</template>

<script>
import Codemirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/python/python.js";
// 折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/display/autorefresh'



import { ref } from "vue";
export default {
  name: "MyCodemirror",
  props: {
    mode: String,
  },
  components: { Codemirror },
  setup(props) {
    const code = ref();
    const mode = props.mode || "python"
    return {
      code,
      cmOptions: {
        autoRefresh: true, // 自动刷新为true
        mode: mode, // 语言模式
        theme: "default", // 主题
        lineNumbers: true, // 显示行号
        smartIndent: true, // 智能缩进
        indentUnit: 4, // 智能缩进单位为4个空格长度
        foldGutter: true, // 启用行槽中的代码折叠
        styleActiveLine: true, // 显示选中行的样式
        completeSingle: false,
        lineWrapping: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'], // 启用折叠需要的配置
      },
      onChange() {
        // console.log(code);
      },
    };
  },

}
</script>