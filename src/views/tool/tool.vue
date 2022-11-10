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
import { defineComponent} from 'vue';
import getIp from "@/components/getIp.vue";
import timezone from "@/components/timezone";




export default defineComponent({
    components: {getIp,timezone},

});
</script>