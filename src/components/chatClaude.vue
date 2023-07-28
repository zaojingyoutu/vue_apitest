<template>
    <a-textarea :rows="4" placeholder="maxlength is 6" :maxlength="6" />
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  const value = ref<string>('');
  </script>
  
  