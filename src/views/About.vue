<template>
    <div class="describe">
        <a-collapse v-model:activeKey="activeKey">
            <a-collapse-panel key="1" header="描述">
                <a-input v-model:value="value" :bordered="false" placeholder="请添加描述"/>
            </a-collapse-panel>
        </a-collapse>
    </div>

</template>
<script>
    import {defineComponent, ref, watch} from 'vue';

    export default defineComponent({
        setup() {
            const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
            const activeKey = ref(['1']);
            watch(activeKey, val => {
                console.log(val);
            });
            return {
                text,
                activeKey,
            };
        },
    });
</script>
