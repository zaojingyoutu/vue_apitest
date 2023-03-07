<template>
  <div style="width: 25%">
    <a-directory-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    multiple @select="selectedKey"
    :tree-data="treeData"
  ></a-directory-tree>
  </div>
  <div>
        <associatedCases v-model:value="content"></associatedCases>
    </div>

</template>
<script>
import { defineComponent, ref } from 'vue';
import {locust_get} from '@/api/locust'
    import associatedCases from "@/components/associatedCases.vue";


export default defineComponent({
  components: {
            associatedCases

  },
  setup() {
    const expandedKeys = ref(['0-0', '0-1']);
    const selectedKeys = ref();
    const content = ref('');
    const treeData =ref([{
      title: 'locustFiles',
      key: '0-0',
      children: []
    }
    ]) ;
locust_get().then((res) => {
  for (let i=0; i< res.length;i++){
    content.value = res[i].content
    treeData.value[0].children.push({
        title: res[i].path,
        key: res[i].id,
        isLeaf: true,
      })
  }
})
    const  selectedKey=(id)=>{
  selectedKeys.value=[id[id.length-1]]
    }

    return {
      expandedKeys,
      selectedKeys,
      treeData,
      selectedKey,
      content
    };
  },
});
</script>