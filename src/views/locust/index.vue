<template>
  <div style="width: 25%;float: left">
    <a-directory-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    multiple @select="selectedKey"
    :tree-data="treeData"
  ></a-directory-tree>
  </div>
  <div style="width: 75%;height: 70%; float:right">
    <a-button>保存</a-button>
    <MyCodemirror v-model:value="content"></MyCodemirror>
    </div>

</template>
<script>
import { defineComponent, ref } from 'vue';
import {locust_get,locust_detail} from '@/api/locust'
import MyCodemirror from "@/components/VueCodemirror.vue";


export default defineComponent({
  components: {
            MyCodemirror

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
  content.value = res[0].content
  selectedKeys.value=[res[0].id]
  for (let i=0; i< res.length;i++){
    treeData.value[0].children.push({
        title: res[i].path,
        key: res[i].id,
        isLeaf: true,
      })
  }
})
    const  selectedKey=(id)=>{
  selectedKeys.value=[id[id.length-1]]
      locust_detail(selectedKeys.value[0]).then((res) => {
        content.value = res.content
      })
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