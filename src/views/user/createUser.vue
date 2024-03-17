<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="用户名" required>
      <a-input v-model:value="modelRef.username" />
    </a-form-item>
    <a-form-item label="邮箱">
      <a-input v-model:value="modelRef.email" />
    </a-form-item>
    <a-form-item label="密码" required>
      <a-input-password v-model:value="modelRef.password" />
    </a-form-item>

    <a-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">保存</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">清除</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive, computed, defineComponent, ref } from "vue";
import { toArray } from "lodash-es";
import { Form } from "ant-design-vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { user_get, user_api } from "@/api/user";

const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const router = useRouter();

    const user = useRouter().currentRoute.value.query;
    if (user.id != undefined) {
      user_get(useRouter().currentRoute.value.query).then((res) => {
        if (res.code != 200) {
          message.error({
            content: res.msg,
            duration: 5,
          });
        } else {
          (modelRef.username = res.data[0].username),
            (modelRef.email = res.data[0].email),
            (modelRef.password = res.data[0].password),
            (modelRef.id = res.data[0].id);
        }
      });
    }

    const modelRef = reactive({
      username: "",
      email: "",
      password: "",
    });

    const { resetFields, validate, validateInfos, mergeValidateInfo } =
      useForm(modelRef);

    const onSubmit = () => {
      validate()
        .then(() => {
          var req_method;
          if (user.id == undefined) {
            req_method = "post";
          } else {
            req_method = "put";
          }
          user_api(modelRef, req_method).then((res) => {
            message.success({
              content: res.msg,
              duration: 5,
            });
            if (res.code == 200) {
              router.push("/userList");
            }
          });
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });
    return {
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
      value1: ref(),
    };
  },
});
</script>
<style scoped>
.error-infos :deep(.ant-form-explain) {
  white-space: pre-line;
}
</style>