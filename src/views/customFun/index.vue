<template>
    <div style="width: 25%;float: left">
        <a-directory-tree
                v-model:expandedKeys="expandedKeys"
                v-model:selectedKeys="selectedKeys"
                multiple @select="selectedKey"
                :tree-data="treeData"
        ></a-directory-tree>
    </div>
    <div style="width: 75%;height: 600px; float:right">
        <div class="button" style="margin-bottom: 5px">
            <a-button type="primary" @click="showModal" style="margin-left: 10px">新增
                <a-modal v-model:visible="visible" title="新增文件" @ok="handleOk">
                    <a-form>
                        <a-form-item label="方法名" required>
                            <a-input v-model:value="modelRef.name"/>
                        </a-form-item>
                    </a-form>
                </a-modal>
            </a-button>


            <a-button type="primary" style="margin-left: 10px" @click="put">保存</a-button>
            <a-button type="primary" style="margin-left: 10px" @click="del">删除</a-button>
            <a-button type="primary" @click="showModal2" style="margin-left: 10px">运行
                <a-modal v-model:visible="visible2" title="运行" @ok="run">
                    <a-form>
                        <h3>注意：执行方法要与文件中的方法一样</h3>
                        <a-form-item label="执行方法" required>
                            <a-input v-model:value="modelRef.fun_name"/>
                        </a-form-item>
                    </a-form>
                </a-modal>
            </a-button>

        </div>

        <MyCodemirror v-model:value="modelRef.content"></MyCodemirror>
    </div>

</template>
<script>
    import {defineComponent, reactive, ref} from 'vue';
    import {
        customFun_get,
        customFun_detail,
        customFun_create,
        customFun_put,
        customFun_del,
        customFunRun
    } from '@/api/customFun'
    import MyCodemirror from "@/components/VueCodemirror.vue";
    import {message} from "ant-design-vue";


    export default defineComponent({
        components: {
            MyCodemirror

        },
        setup() {
            const expandedKeys = ref(['0-0', '0-1']);
            const selectedKeys = ref();
            const treeData = ref([{
                title: '自定义方法',
                key: '0-0',
                children: []
            }
            ]);
            customFun_get().then((res) => {
                // content.value = res[0].content
                selectedKeys.value = [res[0].id]
                modelRef.id = res[0].id
                modelRef.name = res[0].name
                modelRef.fun_name = res[0].fun_name
                modelRef.content = res[0].content
                for (let i = 0; i < res.length; i++) {
                    treeData.value[0].children.push({
                        title: res[i].name,
                        key: res[i].id,
                        isLeaf: true,
                    })
                }
            })
            const selectedKey = (id) => {
                selectedKeys.value = [id[id.length - 1]]
                customFun_detail(selectedKeys.value[0]).then((res) => {
                    modelRef.content = res.content
                    modelRef.name = res.name
                    modelRef['id'] = res.id
                    console.log(res, modelRef)
                })

            }

            const visible = ref(false);
            const showModal = () => {
                visible.value = true;
            };
            const visible2 = ref(false);
            const showModal2 = () => {
                visible2.value = true;
            };
            const handleOk = () => {


                modelRef.content = `def ${modelRef.name}():
  pass
  return None`

                delete modelRef.id
                modelRef.fun_name = modelRef.name + '()'
                customFun_create(modelRef).then((res) => {
                    // content.value = res.data.content
                    if (res.status == 201) {
                        modelRef.id = res.id
                        visible.value = false;
                        visible.value = false;
                        message.success({
                                content: "添加成功！",
                                duration: 5
                            }
                        );
                        treeData.value[0].children.unshift({
                            title: modelRef.name,
                            key: treeData.value[0].children.length + 1,
                            isLeaf: true,
                        })
                        selectedKeys.value = [treeData.value[0].children.length]
                    } else {
                        message.error({
                                content: "添加失败！",
                                duration: 5
                            }
                        );
                    }
                }).catch(
                    err => {
                        message.error({
                                content: "添加失败！" + JSON.stringify(err.response.data),
                                duration: 5
                            }
                        );
                    }
                )


            };
            const modelRef = reactive({
                mold: 'file',
                content: '',
                name: '',
                fun_name: ''

            });
            const put = () => {

                modelRef['create_user'] = JSON.parse(localStorage.getItem("user")).name
                // modelRef.content = content
                customFun_put(modelRef).then((res) => {
                    // content.value = res.content
                    if (res.status == 200) {
                        message.success({
                                content: "操作成功！",
                                duration: 5
                            }
                        );
                    } else {
                        message.success({
                                content: "操作失败！",
                                duration: 5
                            }
                        );
                    }

                })

                console.log(modelRef)
            }
            const del = () => {
                customFun_del(modelRef.id).then((res) => {
                    console.log(1111111111, res)
                    if (res == '') {
                        message.success({
                                content: "删除成功！",
                                duration: 5

                            },
                            location.reload()
                        );
                    } else {
                        message.success({
                                content: "操作失败！",
                                duration: 5
                            }
                        );
                    }

                })

            }
            const run = () => {
                customFunRun(modelRef).then((res) => {
                    if (res.status == 200) {
                        message.success({
                                content: "运行成功！结果为：" + res.data,
                                duration: 8
                            },
                        );
                        visible2.value = false
                    } else {
                        message.success({
                                content: "运行失败！",
                                duration: 5
                            }
                        );
                    }

                })

            }
            return {
                expandedKeys,
                selectedKeys,
                treeData,
                selectedKey,
                visible,
                showModal,
                visible2,
                showModal2,
                modelRef,
                handleOk,
                put,
                del,
                run

            };
        },
    });
</script>