<template>
  <a-tabs v-model:activeKey="activeKey" centered>
    <a-tab-pane key="1" tab="时间转换">
      <timezone></timezone>
    </a-tab-pane>
    <a-tab-pane key="2" tab="获取ip" force-render>
      <getIp></getIp>
    </a-tab-pane>
    <a-tab-pane key="3" tab="字典转json"><dictToJson></dictToJson></a-tab-pane>
    <a-tab-pane key="4" tab="手机号获取"><moble></moble></a-tab-pane>
    <a-tab-pane key="5" tab="uuid生成器"><uuid></uuid></a-tab-pane>
  </a-tabs>
</template>
<script>
import { defineComponent } from "vue";
import getIp from "@/components/getIp.vue";
import timezone from "@/components/timezone";
import dictToJson from "@/components/dictToJson";
import moble from "@/components/getMoble";
import uuid from "@/components/uuid";

export default defineComponent({
  components: { getIp, timezone, dictToJson, moble, uuid },
});
</script>