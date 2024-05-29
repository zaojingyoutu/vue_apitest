<template>
  <div id="hot-table">
    <hot-table
    :settings="hotSettings"
    @change="$emit('update:data', $event.target.value)"
  ></hot-table>
  </div>
  
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css";
import "handsontable/dist/languages/zh-CN.js";

registerAllModules();

export default defineComponent({
  props: {
    data: Array,
  },
  emits: ["update:data"],
  setup(props) {
    const dataResource = ref(props.data);
    const hotSettings = reactive({
      data: dataResource,
      rowHeaders: true,
      colHeaders: true,
      licenseKey: "non-commercial-and-evaluation",
      language: "zh-CN",
      contextMenu: true,
    });

    const hotTable = ref(null);

    return {
      hotSettings,
      dataResource,
      hotTable
    };
  },
  components: {
    HotTable,
  },
});
</script>
