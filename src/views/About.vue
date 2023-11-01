<template>
  <a-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    :load-data="onLoadData"
    :tree-data="treeData"
  />
</template>
<script>
import { defineComponent, ref } from 'vue';
import {project_get} from '@/api/project'

export default defineComponent({
  setup() {
    const expandedKeys = ref([]);
    const selectedKeys = ref([]);
    const treeData = ref([]);

    project_get().then((res) => {
         this.data =  res.data;
         for(let i=0;i<res.data.length;i++){
          treeData.value.push({title:res.data[0].name,key:res.data[0].id})
         }
     });
    const onLoadData = treeNode => {
      return new Promise(resolve => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }
        setTimeout(() => {
          treeNode.dataRef.children = [{
            title: 'Child Node',
            key: `${treeNode.eventKey}-0`,
          }, {
            title: 'Child Node',
            key: `${treeNode.eventKey}-1`,
          }];
          treeData.value = [...treeData.value];
          resolve();
        }, 1000);
      });
    };
    return {
      expandedKeys,
      selectedKeys,
      treeData,
      onLoadData,
    };
  },
});
</script>