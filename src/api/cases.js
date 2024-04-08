import request from '@/utils/request'

export function cases_api(data,method){
    return request.request({
        method: method,
          url: "case/",
          data: data,
    })
}

export function cases_get(data){
    return request.request({
        method: "get",
          url: "case/",
          params: data,
    })
}

export function cases_put(data){
    return request.request({
        method: "put",
          url: "case/",
          data: data,
    })
}

export function cases_create(data){
    return request.request({
        method: "post",
          url: "case/",
          data: data,
    })
}

export function cases_del(data){
    return request.request({
        method: "delete",
          url: "case/",
          data: [data],
    })
}

export function cases_module(data){
    return request.request({
        method: "get",
        url: "caseModule/",
        params: data,
    })
}