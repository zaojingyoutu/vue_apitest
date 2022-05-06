import request from '@/utils/request'

export function project_api(data,method){
    return request.request({
        method: method,
          url: "project/",
          data: data,
    })
}

export function project_get(data){
    return request.request({
        method: "get",
          url: "project/",
          params: data,
    })
}

export function project_put(data){
    return request.request({
        method: "put",
          url: "project/",
          data: data,
    })
}

export function project_create(data){
    return request.request({
        method: "post",
          url: "project/",
          data: data,
    })
}

export function project_del(data){
    return request.request({
        method: "delete",
          url: "project/",
          data: [data],
    })
}