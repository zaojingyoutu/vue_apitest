
<template>
    <iframe :srcdoc="htmlText" style="width: 100%;height: 85vh;"></iframe>
</template>

<script>
  import { defineComponent,ref } from "vue";
  import { locustReportDetail } from "@/api/locustReport";
  import {useRouter } from 'vue-router';

  export default defineComponent({
    setup() {

        let htmlText =ref()
         const query = useRouter().currentRoute.value.query;
         console.log(query)
         locustReportDetail(query.id).then((res) => {
           htmlText.value=res
           console.log(htmlText)
        })
       
     
  
      return {
        htmlText,
      };
  }});
</script>
