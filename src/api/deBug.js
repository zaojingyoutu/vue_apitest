import request from '@/utils/request'

export function deBug_api(data,method){
    return request.request({
        method: method,
          url: "debug/",
          data: data,
    })
}

export function deBug_post(data){
    return request.request({
        method: "post",
          url: "debug/",
          data: data,
    })
}
