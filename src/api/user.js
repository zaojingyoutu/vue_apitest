import request from '@/utils/request'

export function user_api(data,method){
    return request.request({
        method: method,
          url: "user/",
          data: data,
    })
}

export function user_get(data){
    return request.request({
        method: "get",
          url: "user/",
          params: data,
    })
}

export function user_put(data){
    return request.request({
        method: "put",
          url: "user/",
          data: data,
    })
}

export function user_create(data){
    return request.request({
        method: "post",
          url: "user/",
          data: data,
    })
}

export function user_del(data){
    return request.request({
        method: "delete",
          url: "user/",
          data: [data],
    })
}



export function workplace_user_get(data){
    return request.request({
        method: "get",
          url: "workplace_user/",
          params: data,
    })
}