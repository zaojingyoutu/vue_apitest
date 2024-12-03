<template>
  <div  >
    <div v-if="isShow">
      <iframe :src="url" style="width: 100%;height: 85vh;border: none;"></iframe>

    </div>
  <div v-else>
    <h2 style="  top: 50%; left: 50%; position: fixed; ">请先运行locust</h2>
  </div>
  </div>
  
  
</template>
<script>
import { ref ,defineComponent} from 'vue'
export default defineComponent ({
  setup() {
    const url = "https://www.zaojingyoutu.top:8002/locustWeb/"
    const isShow = ref(false)
    fetch(url).then(r=>{
      if(r.status != 200){
        isShow.value= false
      }else{
        isShow.value= true
      }
          })
    return{
      isShow,
      url
    }
  },
})
</script>>