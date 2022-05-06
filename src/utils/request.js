import axios from 'axios'
// import store from '@/store'
// import storage from 'store'
import notification from 'ant-design-vue/es/notification'
// import { VueAxios } from './axios'
// import { token } from '@/store/mutation-types'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: 'https://124.71.4.214:8000/api/',
  timeout: 10000 // 请求超时时间
})
request.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    // 从 localstorage 获取 token
    const token = localStorage.getItem("token")
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
      window.location.href="/login";

    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'

      })
      if (token) {
        // store.dispatch('Logout').then(() => {
        //   setTimeout(() => {
        //     window.location.reload()
        //   }, 1500)
        window.location.reload()
        // })
      }
      window.location.href="/login";

    }

  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

// const installer = {
//   vm: {},
//   install (Vue) {
//     Vue.use(VueAxios, request)
//   }
// }

export default request

// export {
//   // installer as VueAxios,
//   request as axios
// }
