import request from '@/utils/request'

export function Login(data){
    return request.request({
        method: "post",
          url: "login/",
          data: data,
    })
}

