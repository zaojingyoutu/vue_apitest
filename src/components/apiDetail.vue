<template>
    <div @change="$emit('update:parameter', $event.target.value)">
        <div class="Breadcrumb" style="text-align: left; height: 30px">
            <div class="describe" style="float: right; width: 25%;">
                <a-collapse ghost>
                    <a-collapse-panel key="1" header="描述">
                        <a-textarea v-model:value="modelRef.describe" placeholder="请添加" :rows="4" />
                    </a-collapse-panel>
                </a-collapse>
                <router-link :to="{
                    path: '/variate_list',
                    query: { project: modelRef.project },
                }" target="_blank">全局变量管理</router-link>
                |
                <button id="copyButton" @click="copyButton">Copy</button>
            </div>
        </div>
        <div>
            <div class="basicInfo" style="width: 50%; text-align: left">
                <div class="name" style="width: 75%;">
                    <a-form-item label="用例名称：">
                        <a-input v-model:value="modelRef.name" placeholder="用例标题" />
                        <br /><br />
                    </a-form-item>
                </div>
                <div style="display: flex;">
                    <div class="type" style="margin-right: 10px;height: 32px;">
                        <a-form-item label="环境：">
                            <a-select ref="select" v-model:value="modelRef.env" style="width: 120px" :options="options1"
                                @focus="focus" @change="handleChange"></a-select>
                            <br /><br />
                        </a-form-item>
                    </div>
                    <div class="project">
                        <a-form-item label="项目：">
                            <div class="selectEnv" style="float: left">
                                <a-select ref="select" v-model:value="modelRef.project" style="width: 120px"
                                    :options="optionsProject" @focus="focus" @change="handleChange"></a-select>
                            </div>
                        </a-form-item>
                    </div>
                </div>

                <div class="module" style="width: 40%">
                    <a-form-item label="模块：">
                        <a-select v-model:value="modelRef.module" mode="tags" style="width: 100%"
                            placeholder="Tags Mode" @change="handleChangeModule" :options="optionsModule"></a-select>
                    </a-form-item>
                </div>
            </div>
            <div class="requestInfo">
                <div class="requestHead">
                    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                        <div class="method" style="float: left">
                            <a-select v-model:value="modelRef.method" placeholder="method">
                                <a-select-option value="POST">POST</a-select-option>
                                <a-select-option value="GET">GET</a-select-option>
                                <a-select-option value="PUT">PUT</a-select-option>
                                <a-select-option value="DELETE">DELETE</a-select-option>
                            </a-select>
                        </div>
                        <div class="url" style="float: left; width: 60%">
                            <a-input v-model:value="modelRef.url" placeholder="url" />
                        </div>
                        <div class="method" style="float: left">
                            <a-button @click="debug">Send</a-button>
                        </div>
                        <div class="method" style="float: left">
                            <a-button type="primary" @click.prevent="onSubmit">save</a-button>
                        </div>
                    </a-form>
                </div>
                <div class="requestBody">
                    <a-tabs v-model:activeKey="activeKey">
                        <a-tab-pane key="10">
                            <template #tab>
                                <span> 用户变量 </span>
                            </template>
                            <MyCodemirror v-model:value="modelRef.variables" mode="javascript" style="height: 460px">
                            </MyCodemirror>
                        </a-tab-pane>
                        <a-tab-pane key="1">
                            <template #tab>
                                <span> 请求头 </span>
                            </template>
                            <MyCodemirror v-model:value="modelRef.header" mode="javascript" style="height: 460px">
                            </MyCodemirror>
                        </a-tab-pane>
                        <a-tab-pane key="2">
                            <template #tab>
                                <span> 路径参数 </span>
                            </template>
                            <MyCodemirror v-model:value="modelRef.parameter" mode="javascript" style="height: 460px">
                            </MyCodemirror>
                        </a-tab-pane>
                        <a-tab-pane key="3">
                            <template #tab>
                                <span> 请求体 </span>
                            </template>
                            <div>
                                <a-select v-model:value="modelRef.data.method" style="width: 120px;left: 45%"
                                    placeholder="请求体格式">
                                    <a-select-option value="json">json</a-select-option>
                                    <a-select-option value="form-data">form-data</a-select-option>
                                </a-select>
                            </div>
                            <MyCodemirror v-model:value="modelRef.data.content" mode="javascript" style="height: 460px">
                            </MyCodemirror>
                        </a-tab-pane>
                        <a-tab-pane key="4">
                            <template #tab>
                                <span> 断言 </span>
                            </template>
                            <a-form ref="formRef" name="dynamic_form_nest_item" :model="dynamicValidateForm"
                                @finish="onFinish">
                                <a-space v-for="assert in modelRef.asserts" :key="assert.id"
                                    style="display: flex; margin-bottom: 8px" align="baseline">
                                    <a-select ref="select" v-model:value="assert.mold" style="width: 120px"
                                        @focus="focus" placeholder="断言类型">
                                        <a-select-option value="response">response</a-select-option>
                                        <a-select-option value="Status">响应状态</a-select-option>
                                        <a-select-option value="None">无</a-select-option>
                                    </a-select>
                                    <a-form-item>
                                        <a-input v-model:value="assert.value" v-if="assert.mold == 'response'"
                                            placeholder="请填写断言json" />
                                        <a-input v-model:value="assert.value" v-else placeholder="请填写响应状态码" />
                                    </a-form-item>
                                    <MinusCircleOutlined @click="removeAssert(assert)" />
                                </a-space>
                                <a-form-item>
                                    <a-button type="dashed" block @click="addAssert">
                                        <PlusOutlined />
                                        添加断言
                                    </a-button>
                                </a-form-item>
                            </a-form>
                        </a-tab-pane>
                        <a-tab-pane key="5">
                            <template #tab>
                                <span> 前置处理 </span>
                            </template>
                            <associatedCases :associations="modelRef.setup"
                                @update:associations="(setup) => (associations = modelRef.setup)">
                            </associatedCases>
                        </a-tab-pane>
                        <a-tab-pane key="6">
                            <template #tab>
                                <span> 响应 </span>
                            </template>
                            <p style="float: right">
                                响应状态：{{ modelRef.status }} 运行时间：{{ modelRef.run_time }}
                            </p>
                            <div v-if="resp_loading">
                                <MyCodemirror v-model:value="modelRef.response" mode="javascript" style="height: 460px">
                                </MyCodemirror>
                            </div>
                            <div v-else>
                                <a-spin />
                            </div>
                        </a-tab-pane>
                        <a-tab-pane key="7">
                            <template #tab>
                                <span> 后置处理 </span>
                            </template>
                            <associatedCases :associations="modelRef.teardown" @update:associations="(teardown) => (associations = modelRef.teardown)
                                "></associatedCases>
                        </a-tab-pane>
                        <a-tab-pane key="8">
                            <template #tab>
                                <span> 断言结果 </span>
                            </template>
                            <a-table :dataSource="asserts_result" :columns="columns" :pagination="false" />
                        </a-tab-pane>
                        <a-tab-pane key="9">
                            <template #tab>
                                <span> 请求日志 </span>
                            </template>
                            <a-collapse v-model:activeKey="reqActiveKey">
                                <a-collapse-panel v-for:="request in log.request" :key="request.id"
                                    :header="`${request.name}  ${request.status_code}`" style="text-align: left">
                                    <p>url: {{ request.url }}</p>
                                    <p>method: {{ request.method }}</p>
                                    <p>run_time: {{ request.run_time }}</p>
                                    <p>status_code: {{ request.status_code }}</p>
                                    <p>parameter: {{ request.parameter }}</p>
                                    <p>data: {{ request.data.content }}</p>
                                    <p>response: {{ request.response }}</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </a-tab-pane>
                        <template #rightExtra>
                            <a type="primary" @click="formatJson"> json格式化 </a>
                        </template>
                    </a-tabs>

                </div>

            </div>
        </div>
    </div>

</template>
<script>
import { reactive, computed, defineComponent, toRefs } from "vue";
import { toArray } from "lodash-es";
import { Form } from "ant-design-vue";
import { message } from "ant-design-vue";
import { ref } from "vue";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { cases_get, cases_api, cases_module } from "@/api/cases";
import { project_get } from "@/api/project";
import { deBug_post } from "@/api/deBug";
import associatedCases from "@/components/associatedCases.vue";
import { curl_dumps } from "@/utils/jsonToCurl";
import MyCodemirror from "@/components/VueCodemirror.vue";

const useForm = Form.useForm;
export default defineComponent({
    props: {
        parameter: { project_id: Number, id: Number },
    },
    components: {
        MinusCircleOutlined,
        PlusOutlined,
        associatedCases,
        MyCodemirror,
    },
    emits: ["update:parameter"],
    setup(props) {
        const dynamicValidateForm = reactive({
            cases: [],
        });
        const prop = toRefs(props);
        const parameter = prop.parameter.value;
        const project = parameter;
        const jsonStringify = (jsonData) => {
            try {
                return JSON.stringify(JSON.parse(jsonData), null, 2);
            } catch (e) {
                return jsonData;
            }
        };

        if (parameter.id != undefined) {
            cases_get(parameter).then((res) => {
                (modelRef.name = res.data[0].name),
                    (modelRef.project = res.data[0].project),
                    (modelRef.url = res.data[0].url),
                    (modelRef.method = res.data[0].method),
                    (modelRef.module = res.data[0].module),
                    (modelRef.parameter = jsonStringify(res.data[0].parameter)),
                    (modelRef.id = res.data[0].id),
                    (modelRef.setup = res.data[0].setup),
                    (modelRef.describe = res.data[0].describe),
                    (modelRef.teardown = res.data[0].teardown),
                    (modelRef.variables = jsonStringify(res.data[0].variables)),
                    (modelRef.header = jsonStringify(res.data[0].header));
                modelRef.data.method = res.data[0].data.method;
                modelRef.data.content = jsonStringify(res.data[0].data.content);
                if (res.data[0].asserts != null) {
                    modelRef.asserts = res.data[0].asserts;
                }
            });
        }

        const modelRef = reactive({
            name: "",
            project: "",
            module: "",
            url: "",
            method: [],
            header: "{}",
            parameter: "{}",
            data: { "method": "json", "content": "{}" },
            asserts: [],
            id: "",
            response: "",
            setup: { code: "", relation: [] },
            teardown: { code: "", relation: [] },
            env: "0",
            result: "",
            relation: "",
            run_time: "",
            status,
            describe: "",
            variables: "{}",
        });

        const rulesRef = reactive({
            name: [
                {
                    required: true,
                    message: "Please input name",
                },
            ],

            method: [
                {
                    required: true,
                    message: "Please select method",
                    method: "array",
                },
            ],
            module: [
                {
                    required: true,
                    message: "Please input module",
                },
            ],
            url: [
                {
                    required: true,
                    message: "Please input url",
                },
            ],

            header: [
                {
                    required: true,
                    message: "Please input header",
                },
            ],
            parameter: [
                {
                    required: true,
                    message: "Please input parameter",
                },
            ],
            data: [
                {
                    required: true,
                    message: "Please input data",
                },
            ],
            asserts: [
                {
                    required: true,
                    message: "Please input asserts",
                },
            ],
        });

        const { resetFields, validateInfos, mergeValidateInfo } = useForm(
            modelRef,
            rulesRef
        );

        const onSubmit = () => {
            modelRef.relation = dynamicValidateForm.cases;
            const saveData = JSON.parse(JSON.stringify(modelRef));
            delete saveData["response"];
            delete saveData["env"];
            delete saveData["result"];
            delete saveData["run_time"];
            delete saveData["status"];

            var req_method;
            if (modelRef.id == "") {
                req_method = "post";
            } else {
                req_method = "put";
            }
            cases_api(saveData, req_method).then((res) => {
                message.success({
                    content: res.msg,
                    duration: 5,
                });
                if (req_method == "post") {
                    modelRef.id = res.data.id;
                }
            });
        };
        const log = reactive({
            request: "",
        });

        const debug = () => {
            (modelRef.relation = dynamicValidateForm.cases),
                (resp_loading.value = false);
            deBug_post(modelRef).then((res) => {
                if (res.code == 200) {
                    message.success({
                        content: res.msg,
                        duration: 5,
                    });
                    try {
                        if (res.data.response.includes("{")) {
                            modelRef.response = JSON.stringify(
                                JSON.parse(res.data.response),
                                null,
                                2
                            );
                        } else {
                            modelRef.response = res.data.response;
                        }
                    } catch {
                        modelRef.response = res.data;
                    }
                    asserts_result.value = res.data.result
                    res.data.request_data.forEach((obj) => {
                        if (obj.id == parameter.id) {
                            modelRef.run_time = obj.run_time;
                        }
                    });

                    modelRef.status = res.data.status_code;
                    resp_loading.value = true;
                } else {
                    message.error({
                        content: res.msg,
                        duration: 5,
                    });
                    modelRef.response = res.data;
                    resp_loading.value = true;
                }
                log.request = res.data.request_data;
            });
        };

        const errorInfos = computed(() => {
            return mergeValidateInfo(toArray(validateInfos));
        });

        const state = reactive({
            data: [],
            value: [],
            fetching: false,
        });
        const formRef = ref();

        const removeUser = (item) => {
            let index = dynamicValidateForm.cases.indexOf(item);

            if (index !== -1) {
                dynamicValidateForm.cases.splice(index, 1);
            }
        };

        const addUser = () => {
            dynamicValidateForm.cases.push({
                mold: "None",
                value: "",
                name: "",
                runRelation: false,
                runTeardown: false,
            });
        };

        const onFinish = (values) => {
            console.log("Received values of form:", values);
        };

        const removeAssert = (item) => {
            let index = modelRef.asserts.indexOf(item);

            if (index !== -1) {
                modelRef.asserts.splice(index, 1);
            }
        };

        const addAssert = () => {
            modelRef.asserts.push({
                value: "",
                mold: "response",
            });
        };
        const resp_loading = ref(true);

        const options1 = ref([
            {
                value: "0",
                label: "开发环境",
            },
            {
                value: "1",
                label: "测试环境",
            },
            {
                value: "2",
                label: "线上环境",
            },
        ]);

        const focus = () => { };

        const handleChange = () => { };

        const optionsProject = ref([]);

        project_get().then((res) => {
            for (var i = 0; i < res.data.length; i++) {
                optionsProject.value.push({
                    value: res.data[i].id,
                    label: res.data[i].name,
                });
                if (parameter.project_id == res.data[i].id) {
                    modelRef.project = res.data[i].id;
                }
            }
        });
        const copyButton = () => {
            const centent = curl_dumps(modelRef);
            navigator.clipboard.writeText(centent);
        };
        const reqActiveKey = ref([]);

        const optionsModule = ref([]);

        cases_module({ project_id: parameter.project_id }).then((res) => {
            for (var i = 0; i < res.data.length; i++) {
                optionsModule.value.push({
                    value: res.data[i].module,
                    label: res.data[i].module,
                });
            }
        });

        const handleChangeModule = (value) => {
            modelRef.module = value[0];
        };

        const asserts_result = ref();
        const formatJson = () => {
            modelRef.parameter = jsonStringify(modelRef.parameter)
            modelRef.header = jsonStringify(modelRef.header)
            modelRef.data.content = jsonStringify(modelRef.data.content)
        };

        return {
            copyButton,
            addAssert,
            removeAssert,
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 14,
            },
            validateInfos,
            resetFields,
            modelRef,
            onSubmit,
            errorInfos,
            debug,
            activeKey: ref("1"),
            formRef,
            dynamicValidateForm,
            onFinish,
            removeUser,
            addUser,
            ...toRefs(state),
            checked: ref(false),
            focus,
            handleChange,
            options1,
            optionsProject,
            project,
            resp_loading,
            log,
            reqActiveKey,
            optionsModule,
            formatJson,
            handleChangeModule,
            asserts_result,
            columns: [
                {
                    title: '用例名',
                    dataIndex: 'name',
                    key: 'id',
                }, {
                    title: '结果',
                    dataIndex: 'result',
                    key: 'result',
                }, {
                    title: 'msg',
                    dataIndex: 'msg',
                    key: 'msg',
                }]
        };
    },
});
</script>
<style scoped>
.requestInfo {
    display: flex;
    flex-direction: column;
}
</style>