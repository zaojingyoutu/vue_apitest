import request from '@/utils/request'

export function Login(data){
    return request.request({
        method: "post",
          url: "login/",
          data: data,
    })
}

export function RefreshToken(){
    const data = {"refresh":JSON.parse(localStorage.getItem("user")).refresh_token}
    return request.request({
        method: "post",
          url: "refresh/",
          data: data,
    })
}

