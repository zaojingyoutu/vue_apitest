<template>
    <h1>字典转json</h1>
    <dev class="time cycle" style="width:50%;height:200px;float: left;">
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol" style="width:500px;height:200px;margin: auto;">
            <a-form-item label="字典" required>
                <!--                <a-input v-model:value="modelRef.dict" />-->
                <a-textarea
                        v-model:value="modelRef.dict"
                        style="margin-top: 0px; margin-bottom: 0px; height: 150px"
                />
            </a-form-item>
            <a-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click.prevent="onSubmit">提交</a-button>
                <a-button style="margin-left: 10px" @click="resetFields">重置</a-button>
            </a-form-item>
        </a-form>
    </dev>
    <div class="cycleDate" style="float: right;width:50%;">
        <div style="background: #ececec; padding: 30px ;width:100%;margin: auto;">
            <a-card title="json" :bordered="false" style="width: 100%">
                <a-textarea
                        v-model:value="modelRef.json"
                        style="margin-top: 0px; margin-bottom: 0px; height: 150px"
                />
            </a-card>
        </div>
    </div>
</template>
<script>
import {reactive, defineComponent} from 'vue';
import {dictFotmat_post} from '@/api/dictFormat'


export default defineComponent({
setup() {
    const modelRef = reactive({
        dict: null,
        json: null,
    });

    const onSubmit = () => {
        let request_data = {'dict_data': modelRef.dict}
        dictFotmat_post(request_data).then((res) => {
           console.log(res)
            if (res.code == 200){
                modelRef.json = JSON.stringify(res.json_data)
            }
            else {alert(res.msg)}
        })
    };

    const resetFields = () =>{
        modelRef.json = null
        modelRef.dict = null
    }

    return {
        resetFields,
        modelRef,
        onSubmit,

    };
},

});
</script>