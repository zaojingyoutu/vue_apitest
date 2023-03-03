import request from '@/utils/request'

export function import_api(data,method){
    return request.request({
        method: method,
          url: "globalsvariate/",
          data: data,
    })
}

export function import_post(data){
    return request.request({
        method: "post",
          url: "importApi/",
          data: data,
    })
}

export function variate_put(data){
    return request.request({
        method: "put",
          url: "globalsvariate/",
          data: data,
    })
}

export function variate_create(data){
    return request.request({
        method: "post",
          url: "globalsvariate/",
          data: data,
    })
}

export function variate_del(data){
    return request.request({
        method: "delete",
          url: "globalsvariate/",
          data: [data],
    })
}