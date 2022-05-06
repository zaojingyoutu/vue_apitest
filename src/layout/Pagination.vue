<template>
     <a-pagination v-model:current="current" :total="500" />
</template>

<script>
  import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      current: ref(6),
    };
  },

});
</script>

<style scoped>

</style>