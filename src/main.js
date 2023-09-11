import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  layout from './layout/layout'
import 'codemirror/lib/codemirror.css';

let allURL;
if (process.env.VUE_APP_FLAG == "dev") {
  allURL = process.env.VUE_APP_VUE_APP_BASEURL;
} else{
  allURL = "https://www.zaojingyoutu.top:8000/api/";
}

// let baseUrl = '127.0.0.1:8000/api/'
// let baseUrl = 'https://www.zaojingyoutu.top:8000/api/'
axios.defaults.baseURL = allURL;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
createApp(App).use(router).use(Antd).use(VueAxios, axios).component('layout',layout).mount('#app');
