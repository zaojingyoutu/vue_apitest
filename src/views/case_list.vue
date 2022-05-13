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
                        :label="`name`"
                        :rules="[{ message: 'input something' }]"
                >
                    <a-input v-model:value="formState[`name`]" placeholder="请输入用例名称！"></a-input>
                </a-form-item>
                <a-form-item
                        style="margin-left: 20px"
                        :name="`project`"
                        :label="`project`"
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
                    <a-button type="primary" html-type="submit">Search</a-button>
                    <a-button style="margin: 0 8px" @click="() => formRef.resetFields()">Clear</a-button>
                </a-col>
            </a-row>
        </a-form>
        <div style="margin-right: 10px;
    margin-left: 10px;float: left;margin-top: 5px;">
            <a-button type="primary">
                <router-link :to="{path:'/debug',query:{project_id:this.$route.query.project_id}}">
                    <a style="color: white">Create</a>
                </router-link>
            </a-button>
        </div>
        <div class="search-result-list">


            <a-table :columns="columns" :data-source="data" :scroll="{ x: 1900, y: 600 } " :pagination="{total:total }"
                     @change="onChange">
                <template #bodyCell="{ column,record,text }">
                    <template v-if="column.key === 'name'">
                        <router-link :to="{path:'/debug',query:{project_id: record.project,id:record.id}}">
                            <a>{{ text }}</a>
                        </router-link>
                    </template>
                    <template v-if="column.key === 'operation'">
                        <router-link :to="{path:'/debug',query:{project_id: record.project,id:record.id}}"><a>Debug</a>
                        </router-link>
                        |
                        <a @click="deletes(record)">Delete</a> |
                        <router-link :to="{path:'/create_case',query:{project_id: record.project,id:record.id}}">
                            <a>Edit</a> |
                        </router-link>
                        <a @click="copy(record)">Copy</a>
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
        title: 'Full Name',
        width: 300,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        ellipsis: true,
    },
        {
            title: 'project',
            width: 100,
            dataIndex: 'project__name',
            key: 'project__name',
            fixed: 'left',
        },
        {
            title: 'module',
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
            title: 'createtime',
            dataIndex: 'create_time',
            key: 'create_time',
            ellipsis: true,
        }, {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 220,
        }];
    import {useRouter} from "vue-router";
    import {message} from "ant-design-vue";
    import {project_get} from '@/api/project'


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

                        console.log(res);
                        console.log(res.data.result);
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

                    console.log(res);
                    console.log(res.data.result);
                });
                console.log(record)
            }
            const expand = ref(false);
            const formRef = ref();
            const formState = reactive({
                project_id: '',
            });

            const onFinish = values => {
                console.log('Received values of form: ', values);
                console.log('formState: ', formState);
                formState['current'] = 1
                cases_get(formState)
                    .then((res) => {
                        data.value = res.data;
                        total.value = res.total
                        // console.log("-----------",this.$route.query );
                    });

            };
            const pageSize = ref(20);
            const current = ref(1);
            const total = ref();

            const onChange = page => {
                formState['current'] = page.current
                cases_get(formState)
                    .then((res) => {
                        data.value = res.data;
                        total.value = res.total
                        // console.log("-----------",this.$route.query );
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

                console.log(optionsProject.value);
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
                optionsProject

            }
        }
    });


</script>

<style>


</style>