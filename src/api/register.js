import request from '@/utils/request'


export function register_get(data){
    return request.request({
        method: "post",
          url: "register/",
          data: data,
    })
}
