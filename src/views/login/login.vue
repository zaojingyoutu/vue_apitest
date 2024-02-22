<template>
  <img src="./../../../public/R.jpeg" style="width: 100%;height: 100vh;"/>
  <div
    style="
      position: absolute;
      right: 40%;
      width: 400px;
      border: 3px solid #42b983;
      padding: 10px;
      top: 40%;
      background: #ffffff;
      height: 300px;
    "
  >
    <h2>欢迎来到接口测试平台</h2>
    <br />
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label=""
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label=""
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <div class="login-form-wrap">
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember"
            >记住密码</a-checkbox
          >
        </a-form-item>
        <a class="login-form-forgot" href="">忘记密码</a>
      </div>

      <a-form-item>
        <a-button
          :disabled="disabled"
          type="primary"
          html-type="submit"
          class="login-form-button"
          @click="login"
        >
          登录
        </a-button>

        <div style="">
          <a type="primary" @click="showModal">注册</a>
          <a-modal v-model:visible="visible" title="register" @ok="handleOks">
            <div>
              <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-item label="用户名" required>
                  <a-input v-model:value="modelRef.username" />
                </a-form-item>
                <a-form-item label="邮箱号">
                  <a-input v-model:value="modelRef.email" />
                </a-form-item>
                <a-form-item label="密码" required>
                  <a-input-password v-model:value="modelRef.password" />
                </a-form-item>
              </a-form>
            </div>
          </a-modal>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { defineComponent, reactive, computed, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
// import axios from "axios";
import { message } from "ant-design-vue";
import { Login } from "@/api/login";
import { register_get } from "@/api/register";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    const router = useRouter();
    const modelRef = reactive({
      username: "",
      email: "",
      password: "",
    });

    const formState = reactive({
      username: "",
      password: "",
      remember: true,
    });

    const onFinish = () => {};

    const onFinishFailed = () => {};

    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });

    const login = () =>
      Login(formState).then((res) => {
        message.success({
          content: res.msg,
          duration: 5,
        });
        if (res.code == 200) {
          router.push("/index");
          localStorage.setItem("token", "Bearer " + res.data.access_token);
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      });

    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
      console.log(e);
      register_get(modelRef).then((res) => {
        message.success({
          content: res.msg,
          duration: 5,
        });
        if (res.code == 200) {
          router.push("//login");
        }
      });
    };

    const handleOks = () => {
      message.success({
        content: "暂未开放！",
        duration: 5,
      });
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
      visible,
      showModal,
      handleOk,
      modelRef,
      handleOks,
      login,
    };
  },
});
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#components-form-demo-normal-login .login-form-forgot {
  margin-bottom: 24px;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
