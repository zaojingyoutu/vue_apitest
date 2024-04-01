<template>
  <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
    <a-form-item label="项目名" required>
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
    <a-form-item label="描述">
      <a-input v-model:value="modelRef.describe" />
    </a-form-item>
    <a-form-item label="开始时间" required>
      <a-space direction="vertical" :size="12" style="float: left">
        <a-date-picker v-model:value="modelRef.start_time" :locale="locale" />
      </a-space>
    </a-form-item>
    <a-form-item label="结束时间" required>
      <a-space direction="vertical" :size="12" style="float: left">
        <a-date-picker v-model:value="modelRef.end_time" :locale="locale" />
      </a-space>
    </a-form-item>
    <a-form-item
      class="error-infos"
      :wrapper-col="{ span: 14, offset: 4 }"
      v-bind="errorInfos"
    >
      <a-button type="primary" @click.prevent="onSubmit">保存</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">清除</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import { reactive, computed, defineComponent } from "vue";
import { toArray } from "lodash-es";
import { Form } from "ant-design-vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { project_get, project_api } from "@/api/project";
import dayjs from "dayjs";

const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const modelRef = reactive({});
    const rulesRef = reactive({
      name: [{ required: true, message: "Please input name" }],
      describe: [{ message: "Please input describe" }],
      start_time: [{ required: true, message: "Please input start_time" }],
      end_time: [{ required: true, message: "Please input end_time" }],
    });
    const { resetFields, validate, validateInfos, mergeValidateInfo } = useForm(
      modelRef,
      rulesRef
    );
    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });

    const router = useRouter();
    const isUpdate = router.currentRoute.value.query.id != undefined;
    if (isUpdate) {
      project_get(router.currentRoute.value.query).then((res) => {
        modelRef.id = res.data[0].id;
        modelRef.name = res.data[0].name;
        modelRef.describe = res.data[0].describe;
        modelRef.workplace_id = res.data[0].workplace;
        modelRef.start_time = dayjs(res.data[0].start_time, "YYYY-MM-DD");
        modelRef.end_time = dayjs(res.data[0].end_time, "YYYY-MM-DD");
      });
    }

    const onSubmit = () => {
      validate()
        .then(() => {
          var req_method = isUpdate ? "put" : "post";
          project_api(modelRef, req_method).then((res) => {
            if (res.code == 200) {
              message.success({
                content: res.msg,
                duration: 5,
              });
              router.push("/project");
            } else {
              message.success({
                content: res.msg + res.data,
                duration: 5,
              });
            }
          });
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    return {
      resetFields,
      modelRef,
      onSubmit,
      errorInfos,
      locale,
      dayjs,
    };
  },
});
</script>
<style scoped>
.error-infos :deep(.ant-form-explain) {
  white-space: pre-line;
}
</style>