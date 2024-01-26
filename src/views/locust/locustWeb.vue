<template>
  <div  >
    <div v-if="isShow">
      <iframe :src="url" style="width: 100%;height: 85vh;"></iframe>

    </div>
  <div v-else>
    <h2>请先运行locust</h2>
  </div>
  </div>
  
  
</template>
<script>
import { ref ,defineComponent} from 'vue'
export default defineComponent ({
  setup() {
    const url = "https://www.zaojingyoutu.top:8002/locustWeb/"
    const isShow = ref(true)
    fetch(url).then(r=>{
      if(r.status != 200){
        isShow.value= false
      }else{
        isShow.value= true
      }
      
      console.log(isShow.value)
    })
    return{
      isShow,
      url
    }
  },
})
</script>>