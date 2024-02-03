import request from '@/utils/request'
import {getWorkplaceId} from '@/utils/getWorkplaceId'

export function customFun_api(data={},method){
    data['workplace'] = getWorkplaceId()
    return request.request({
        method: method,
          url: "customFun/",
          data: data,
    })
}

export function customFun_get(data={}){
    data['workplace'] = getWorkplaceId()
    return request.request({
        method: "get",
          url: "customFun/",
          params: data,
    })
}
export function customFun_detail(id){
    return request.request({
        method: "get",
          url: "customFun/" + id,

    })
}
export function customFun_put(data){
    return request.request({
        method: "put",
          url: "customFun/" + data.id +"/",
          data: data,
    })
}

export function customFun_create(data={}){
    data['workplace'] = getWorkplaceId()
    return request.request({
        method: "post",
          url: "customFun/",
          data: data,
    })
}

export function customFunRun(data){
    return request.request({
        method: "post",
          url: "customFunRun/",
          data: data,
    })
}

export function customFun_del(id){
    return request.request({
        method: "delete",
          url: "customFun/" + id +"/",
    })
}