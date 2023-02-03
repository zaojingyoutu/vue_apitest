<template>
   <associatedCases  v-model:value="association" @click="test">

   </associatedCases>

</template>
<script>
   import associatedCases from "@/components/associatedCases.vue";
   import {reactive} from "vue";


    export default ({
        components: {
                    associatedCases,
                  },
        setup() {
           const association = reactive({})
           const test=() =>{
              console.log(22222222222222,association)
           }
           return{association,test}

        },
    });
</script>
