import request from '@/utils/request'
import {getWorkplaceId} from '@/utils/getWorkplaceId'

export function variate_api(data,method){
    return request.request({
        method: method,
          url: "globalsvariate/",
          data: data,
    })
}

export function variate_get(data={}){
    data['workplace_id'] =getWorkplaceId()
    return request.request({
        method: "get",
          url: "globalsvariate/",
          params: data,
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