<template>
    <div>
                <a-button type="primary" @click="showDrawer('large')"
                >关联接口
                </a-button>
                <a-table :dataSource="modelRef.case_list" :columns="columns" :pagination="false">
                     <template #bodyCell="{ record,column,text}">
                               <template v-if="column.dataIndex === 'name'">
                                  <router-link :to="{path:'/debug',query:{id:record.id}}" >
                                      <a  >{{ text }}</a>
                                  </router-link>
                              </template>
                    <template v-if="column.dataIndex === 'operation'">
                            <a @click="deletes(record)">Delete</a>
                            <a @click="showModal" type="primary"> | 编辑</a>
                            <div>
                                <a-modal wrap-class-name="full-modal" v-model:visible="visible2" :title="record.name" @ok="handleOk2">
                                    <a-tabs v-model:activeKey="activeKey" style="padding:4px;">
                                        <a-tab-pane key="1" tab="data">
                                            <a-textarea
                                                v-model:value="record.data"
                                                style="margin-top: 0px; margin-bottom: 0px; height: 300px"
                                                />
                                        </a-tab-pane>
                                        <a-tab-pane key="2" tab="header" force-render>
                                            <a-textarea
                                                v-model:value="record.header"
                                                style="margin-top: 0px; margin-bottom: 0px; height: 300px"
                                                />
                                        </a-tab-pane>
                                        <a-tab-pane key="3" tab="parameter">
                                            <a-textarea
                                                v-model:value="record.parameter"
                                                style="margin-top: 0px; margin-bottom: 0px; height: 300px"
                                                />
                                        </a-tab-pane>
                                        <a-tab-pane key="4" tab="变量提取">
                                            <div style="height: 300px">
                                               
                                            </div>
                                        </a-tab-pane>
                                    </a-tabs>
                                </a-modal>
                            </div>
                    </template>
                     </template>
                </a-table>

                <a-drawer
                        title="Basic Drawer"
                        :size="size"
                        :visible="visible"
                        @close="onClose"
                >
                    <template #extra>
                        <a-button style="margin-right: 8px" @click="Close">Cancel</a-button>
                        <a-button type="primary" @click="onClose">Submit</a-button>
                    </template>

                    <div>
                        <div class="SearchCases" style="margin-bottom: 10px">
                            <a-form
                                    ref="formRef"
                                    name="advanced_search"
                                    class="ant-advanced-search-form"
                                    :model="formState"
                                    @finish="onFinish"
                            >
                                <a-row :gutter="24" style="float: left; height: 32px">
                                    <a-form-item
                                            :name="`name`"
                                            :label="`name`"
                                            :rules="[{ message: 'input something' }]"
                                    >
                                        <a-input
                                                v-model:value="formState[`name`]"
                                                placeholder="placeholder"
                                        ></a-input>
                                    </a-form-item>
                                    <a-form-item label="project">
                                        <div class="selectEnv" style="float: left;">
                                            <a-select
                                                    ref="select"
                                                    v-model:value="formState[`project_id`]"
                                                    style="width: 120px"
                                                    :options="optionsProject"
                                            ></a-select>
                                        </div>
                                    </a-form-item>
                                </a-row>
                                <a-row>
                                    <a-col :span="24" style="text-align: right">
                                        <a-button type="primary" html-type="submit"
                                        >Search
                                        </a-button
                                        >
                                        <a-button
                                                style="margin: 0 8px"
                                                @click="() => formRef.resetFields()"
                                        >Clear
                                        </a-button
                                        >
                                    </a-col>
                                </a-row>
                            </a-form>
                        </div>

                        <a-table
                                :row-selection="{
                                                    selectedRowKeys: selectedRowKeys,
                                                    onChange: onSelectChange,
                                                    getCheckboxProps:getCheckboxProps,
                                                  }"
                                :row-key="record => record.id"
                                :columns="columns"
                                :data-source="data"
                                :pagination="false"

                        />
                    </div>
                </a-drawer>
            </div>
</template>
<script>
    import {reactive, computed, defineComponent, ref, toRefs} from "vue";
    import {useRouter} from "vue-router";
    import {cases_get} from "@/api/cases";
    import {project_get} from '@/api/project'

    // import { MinusCircleOutlined } from '@ant-design/icons-vue';

    const columns = [
        {
            title: "Name",
            dataIndex: "name",


        },
        {
            title: "project",
            dataIndex: "project__name",
        },
        {
            title: "module",
            dataIndex: "module",
        },
        {
            title: "操作",
            dataIndex: "operation",
        },
    ];

    export default defineComponent({
        setup() {
            const data = ref();
            const modelRef = reactive({
                name: "",
                describe: "",
                project_id: "",
                case_list: [],
                email: "",
            });
            const count = reactive({
                cases_count: 0,
                cases_false: 0,
            });





     

            const visible = ref(false);
            const size = ref("default");

            const showDrawer = (val) => {
                size.value = val;
                visible.value = true;
                cases_get(formState).then((res) => {
                    data.value = res.data
                    console.log(state.selectedRowKeys)
                });
            };

            const Close = () => {
                visible.value = false;

            };

            const onClose = () => {

                tmpCaseIds.selectedRowKeys = state.selectedRowKeys;
                if( modelRef.case_list.length>0)
                {
                    const addRows = [...tmpCaseIds.selectedRows].filter(x =>[...modelRef.case_list].every(y => y.id !== x.id) )
                    modelRef.case_list.push(...addRows) ;
                    console.log(modelRef.case_list)
                } else {
                    modelRef.case_list.push(...tmpCaseIds.selectedRows) ;
                }

                 visible.value = false;
            };

            const formRef = ref();


            const onFinish = (values) => {
                console.log("Received values of form:", values);
                console.log("modelRef.case_list", state.selectedRowKeys,modelRef.case_list);
                cases_get(formState).then((res) => {
                    data.value = res.data
                    total.value = res.total
                });
            };


            const state = reactive({
                selectedRowKeys: [],
                // Check here to configure the default column
                loading: false,
            });
            const hasSelected = computed(() => state.selectedRowKeys.length > 0);

            

            const tmpCaseIds = reactive({
                selectedRowKeys: [],
                selectedRows: [],
            });

            // 添加用例
            const onSelectChange = (selectedRowKeys, selectedRows) => {
                console.log('selectedRowKeys changed: ', selectedRowKeys, selectedRows,state.selectedRowKeys);
                state.selectedRowKeys=selectedRowKeys;
                tmpCaseIds.selectedRows = selectedRows
            };





            const formState = reactive({});
            const total = ref();
            const onChange = (page) => {
                formState["current"] = page.current;
                cases_get(formState).then((res) => {
                    data.value = res.data
                    total.value = res.total
                });
            };

            const options1 = ref([{
                value: '0',
                label: '测试环境',
            }, {
                value: '1',
                label: '预发布环境',
            }, {
                value: '2',
                label: '线上环境',
            }]);


            const focus = () => {
                console.log('focus');
            };

            const handleChange = value => {
                console.log(`selected ${value}`);
            };

            const project = useRouter().currentRoute.value.query


            const optionsProject = ref([])

            project_get().then((res) => {
                //  this.data =  res.data;
                for (var i = 0; i < (res.data).length; i++) {
                    optionsProject.value.push({value: res.data[i].id, label: res.data[i].name})
                    if (project.project_id == res.data[i].id) {
                        modelRef.project_id = res.data[i].id
                    }
                }

                console.log(optionsProject.value);
            });


            // 删除添加的用例
            const deletes = (record) =>{
                const index = modelRef.case_list.indexOf(record)

                modelRef.case_list.splice(index,1)
                const keyIndex = state.selectedRowKeys.indexOf(record.id)
                delete  state.selectedRowKeys[keyIndex]
                console.log(index)
            }
            const edit = (record) =>{
                const index = modelRef.case_list.indexOf(record)

                modelRef.case_list.splice(index,1)
                const keyIndex = state.selectedRowKeys.indexOf(record.id)
                delete  state.selectedRowKeys[keyIndex]
                console.log(index)
            }

            const getCheckboxProps = record =>
            ({
                disabled: tmpCaseIds.selectedRowKeys.includes(record.id)
            })
            const visible2 = ref(false);
            const showModal = () => {
            visible2.value = true;
            };
            const handleOk2 = e => {
            console.log(e);
            visible2.value = false;
            };


            return {
                formState,
                data,
                columns,
                activeKey: ref("1"),
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
                
                modelRef,
                value1: ref(),
                visible,
                size,
                showDrawer,
                onClose,
                formRef,
                onFinish,
                Close,
                count,
                hasSelected,
                ...toRefs(state),
                onSelectChange,
                total,
                onChange,
                focus,
                handleChange,
                options1,
                optionsProject,
                deletes,
                getCheckboxProps,
                edit,
                visible2,
                showModal,
                handleOk2,
            };
        },
    });
</script>
<style >
.full-modal {
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height:  50%;
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>