<template>
    <!-- <a-button type="primary" @click="showDrawer">Chat</a-button> -->
    <MessageOutlined  @click="showDrawer" style="font-size: 32px;" />
    <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red;"
      title="AI"
      placement="right"
      width ="35%"
      @after-visible-change="afterVisibleChange"
    >
    <iframe src="https://lk-ai.top/" style="width: 100%;height: 98%;" ></iframe>
    </a-drawer>
  </template>
  <script>
  import { defineComponent, ref } from 'vue';
  import { MessageOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    components: {MessageOutlined},
    setup() {
      const visible = ref(false);
      const afterVisibleChange = bool => {
        console.log('visible', bool);
      };
      const showDrawer = () => {
        visible.value = true;
      };
      return {
        visible,
        afterVisibleChange,
        showDrawer,
      };
    },
  });
  </script>