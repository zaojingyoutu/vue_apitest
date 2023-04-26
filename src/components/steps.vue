<template>
    <a-tabs  :value="association" @change="$emit('update:associations',$event.target.value)" >
        <a-tab-pane key="1" tab="code">
            <MyCodemirror v-model:value="association.code" style="height: 200px"></MyCodemirror>
            响应数据：response.json()
            全局变量设置：set_global_svariate(dict)
            局部变量设置：set_variate(key,value)
        </a-tab-pane>
        <a-tab-pane key="2" tab="前置步骤" force-render>
            <a-form
                    ref="formRef"
                    name="dynamic_form_nest_item"
                    :model="association.relation"
                    @finish="onFinish"
            >
                
                <a-form-item>
                    <div>
                        
                            <apiList></apiList>

                    </div>
                </a-form-item>
            </a-form>
        </a-tab-pane>
    </a-tabs>
 </template>
 
 <script>
 import MyCodemirror from "@/components/VueCodemirror.vue";
 import {reactive, toRefs, watch} from "vue";
 import {debounce} from "lodash-es";
 import {cases_get} from "@/api/cases";
 import apiList from "@/components/addApi.vue";

 
 export default {
    name: "associatedCases",
    props: {
        associations: {code:String,
                       relation: []  }   ,
          },
    emits: [ "update:associations"],
    components: {
        MyCodemirror,
        apiList
      
    },
    setup(props) {
 
        const dynamicValidateForm = reactive({
            cases: [],
        });
        const onFinish = (values) => {
            console.log("Received values of form:", values);
            console.log("dynamicValidateForm.users:", dynamicValidateForm.cases);
        };
 
        const prop = toRefs(props)
        const association = prop.associations.value
        console.log(association)
        const addCase = () => {
            // eslint-disable-next-line vue/no-mutating-props
            association.relation.push({
                mold: "response",
                value: "",
                name: "",
                runRelation: false,
                runTeardown: false,
            });
        };
        let lastFetchId = 0;
        const state = reactive({
            data: [],
            value: [],
            fetching: false,
        });
        const fetchUser = debounce((value) => {
            lastFetchId += 1;
            const fetchId = lastFetchId;
            state.data = [];
            state.fetching = true;
            cases_get({name: value}).then((res) => {
                if (fetchId !== lastFetchId) {
                    // for fetch callback order
                    return;
                }
                state.data = res.data.map((cases) => ({
                    label: cases.name + "-" + cases.project__name + "-" + cases.module,
                    value: cases.id,
                    project: cases.project,
                }));
                state.fetching = false;
            });
            watch(state.value, () => {
                state.data = [];
                state.fetching = false;
            });
        }, 100);
        
 
        return {
             association,
            onFinish,
            addCase,
            fetchUser,
            ...toRefs(state),
            
        };
    },
 }
 </script>
 
 <style scoped>
 
 </style>