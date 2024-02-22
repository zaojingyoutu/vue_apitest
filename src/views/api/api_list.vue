<template>

    <div style="margin-right: 20px;
    margin-left: 20px;">
        <a-form
                ref="formRef"
                name="advanced_search"
                class="ant-advanced-search-form"
                :model="formState"
                @finish="onFinish"
        >
            <a-row :gutter="24" style="float: left;height: 32px">
                <a-form-item
                        :name="`name` "
                        :label="`名称`"
                        :rules="[{ message: 'input something' }]"
                >
                    <a-input v-model:value="formState[`name`]" placeholder="请输入用例名称！"></a-input>
                </a-form-item>
                <a-form-item
                        style="margin-left: 20px"
                        :name="`project`"
                        :label="`项目`"
                        :rules="[{  message: 'input something' }]"
                >
                    <!-- <a-input v-model:value="formState[`project_id`]" placeholder="placeholder"></a-input> -->
                    <div class="selectEnv" style="float: left;">
                        <a-select
                                ref="select"
                                v-model:value="formState.project_id"
                                placeholder="请选择！"
                                style="width: 120px"
                                :options="optionsProject"
                        ></a-select>
                    </div>
                </a-form-item>
            </a-row>
            <a-row>
                <a-col :span="24" style="text-align: right">
                    <a-button type="primary" html-type="submit">搜索</a-button>
                    <a-button style="margin: 0 8px" @click="() => formRef.resetFields()">清除</a-button>
                </a-col>
            </a-row>
        </a-form>
        <div style="margin-right: 10px;
    margin-left: 10px;float: left;margin-top: 5px;">
            <a-button type="primary">
                <router-link :to="{path:'/apiDetail',query:{project_id:this.$route.query.project_id}}">
                    <a style="color: white">新增</a>
                </router-link>
            </a-button>
            <a-button type="primary" @click="showModal" style="margin-left: 10px">导入</a-button>
            <a-modal v-model:visible="visible" title="导入数据" @ok="handleOk">
                <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                    <a-form-item label="导入类型" required>
                        <a-input v-model:value="modelRef.type"/>
                    </a-form-item>
                    <a-form-item label="导入值" required>
                        <a-input v-model:value="modelRef.context"/>
                    </a-form-item>
                </a-form>
            </a-modal>

        </div>
        <div class="search-result-list">


            <a-table :columns="columns" :data-source="data" :scroll="{ x: 1900, y: 600 } " :pagination="{total:total }"
                     @change="onChange">
                <template #bodyCell="{ column,record,text }">
                    <template v-if="column.key === 'name'">
                        <router-link :to="{path:'/apiDetail',query:{project_id: record.project,id:record.id}}">
                            <a>{{ text }}</a>
                        </router-link>
                    </template>
                    <template v-if="column.key === 'operation'">
                        <a @click="deletes(record)">删除</a> |
                        <router-link :to="{path:'/apiDetail',query:{project_id: record.project,id:record.id}}">
                            <a>编辑</a> |
                        </router-link>
                        <a @click="copy(record)">复制</a>
                    </template>
                </template>
            </a-table>
        </div>
    </div>


</template>
<script>
    import {defineComponent, reactive, ref} from 'vue';
    import {cases_get, cases_del, cases_create} from '@/api/cases'

    const columns = [{
        title: '名称',
        width: 300,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        ellipsis: true,
    },
        {
            title: '项目',
            width: 100,
            dataIndex: 'project__name',
            key: 'project__name',
            fixed: 'left',
        },
        {
            title: '模块',
            dataIndex: 'module',
            key: 'module',
            width: 150,
        }, {
            title: 'url',
            dataIndex: 'url',
            key: 'url',
            width: 150,
            ellipsis: true,
        }, {
            title: 'method',
            dataIndex: 'method',
            key: 'method',
            width: 90,
        }, {
            title: 'header',
            dataIndex: 'header',
            key: 'header',
            width: 150,
            ellipsis: true,
        }, {
            title: 'parameter',
            dataIndex: 'parameter',
            key: 'parameter',
            width: 250,
            ellipsis: true,
        }, {
            title: 'data',
            dataIndex: 'data',
            key: 'data',
            width: 250,
            ellipsis: true,
        },
//  {
//   title: 'asserts',
//   dataIndex: 'asserts',
//   key: 'asserts',
//   width: 250,
//   ellipsis: true,
// },
        {
            title: '创建时间',
            dataIndex: 'create_time',
            key: 'create_time',
            ellipsis: true,
        }, {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 220,
        }];
    import {useRouter} from "vue-router";
    import {message} from "ant-design-vue";
    import {project_get} from '@/api/project'
    import {import_post} from '@/api/importApi'


    export default defineComponent({

        setup() {
            const data = ref();
            const par = useRouter().currentRoute.value.query
            par['current'] = 1

            cases_get(par)
                .then((res) => {
                    data.value = res.data;
                    total.value = res.total
                });
            const deletes = (record) => {
                cases_del(record.id)
                    .then((res) => {
                        if (res.code == 200) {
                            message.success({
                                    content: "删除成功！",
                                    duration: 5
                                }
                            );
                            cases_get(par).then((res) => {
                                data.value = res.data;
                                total.value = res.total;
                            });
                        } else {
                            message.success({
                                    content: "删除失败！",
                                    duration: 5
                                }
                            );
                        }
                    });
            }
            const copy = (record) => {
                const recordCopy = JSON.parse(JSON.stringify(record));
                delete recordCopy["project__name"];
                recordCopy["name"] = recordCopy["name"] + "-copy";
                cases_create(recordCopy).then((res) => {
                    if (res.code == 200) {
                        message.success({
                                content: "复制成功！",
                                duration: 5
                            }
                        );
                        cases_get(par).then((res) => {
                            data.value = res.data;
                            total.value = res.total;
                        });
                    } else {
                        message.success({
                                content: "复制失败！",
                                duration: 5
                            }
                        );
                    }
                });
            }
            const expand = ref(false);
            const formRef = ref();
            const formState = reactive({
                project_id: '',
            });

            const onFinish = () => {
                if(formState.project_id == ''){
                    delete formState['project_id']
                }
                formState['current'] = 1
                cases_get(formState)
                    .then((res) => {
                        data.value = res.data;
                        total.value = res.total
                    });

            };
            const pageSize = ref(20);
            const current = ref(1);
            const total = ref();

            const onChange = page => {
                formState['current'] = page.current
                if(formState.project_id == ''){
                    delete formState['project_id']
                }
                cases_get(formState)
                    .then((res) => {
                        data.value = res.data;
                        total.value = res.total
                    });
            }
            const optionsProject = ref([])

            project_get().then((res) => {
                //  this.data =  res.data;
                for (var i = 0; i < (res.data).length; i++) {
                    optionsProject.value.push({value: res.data[i].id, label: res.data[i].name})
                    if (par.project_id == res.data[i].id) {
                        formState.project_id = res.data[i].id
                    }
                }

            });

            const visible = ref(false);
            const showModal = () => {
                visible.value = true;
            };
            const handleOk = () => {
                import_post(modelRef).then((res) => {
                        if (res.code == 200) {
                            message.success({
                                    content: "导入成功！",
                                    duration: 5
                                }
                            );
                            cases_get(par).then((res) => {
                                data.value = res.data;
                                total.value = res.total;
                            });
                        } else {
                            message.success({
                                    content: "导入失败！",
                                    duration: 5
                                }
                            );
                        }
                    }
                );
                console.log(modelRef);
                visible.value = false;
            };

            const modelRef = reactive({
                type: 'curl',
                context: '',
                project: par.project_id,

            });

            return {
                formRef,
                formState,
                expand,
                onFinish,
                data,
                columns,
                deletes,
                copy,
                onChange,
                pageSize,
                total,
                current,
                optionsProject,
                visible,
                modelRef,
                showModal,
                handleOk,

            }
        }
    });


</script>

<style>


</style>