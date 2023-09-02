<template>
  <VueDraggableNext v-model="list" @start="onStart" @end="onDragEnd(list)">
    <transition-group>
      <div class="item" v-for="element in list" :key="element.id">
        {{ element.name }}
        <a-button>移动</a-button>
      </div>
    </transition-group>
  </VueDraggableNext>
</template>
  
  <script>
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  components: {
    VueDraggableNext,
  },

  setup() {
    // 定义列表数据
    const list = ref([
      { name: "John", id: 1 },
      { name: "Joao", id: 2 },
      { name: "Jean", id: 3 },
      { name: "Gerard", id: 4 },
    ]);

    // 拖拽结束回调
    const onDragEnd = (event) => {
      console.log(event);
    };

    return {
      list,
      onDragEnd,
    };
  },
};
</script>
  
  <style>
.item {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>
  