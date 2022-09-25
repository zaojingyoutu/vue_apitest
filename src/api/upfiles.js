import request from '@/utils/request'

export function upfiles_api(data,method){
    return request.request({
        method: method,
          url: "upfiles/",
          data: data,
    })
}

export function upfiles_post(data){
    return request.request({
        method: "post",
          url: "upfiles/",
          data: data,

    })
}


export function files_get(data){
    return request.request({
        method: "get",
          url: "upfiles/",
          params: data,

    })
}