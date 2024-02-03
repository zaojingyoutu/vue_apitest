import request from '@/utils/request'
import {getWorkplaceId} from '@/utils/getWorkplaceId'



export function project_api(data={},method){
    data['workplace_id'] = getWorkplaceId()
    return request.request({
        method: method,
          url: "project/",
          data: data,
    })
}

export function project_get(data ={}){
    data['workplace_id'] = getWorkplaceId()
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

export function project_create(data={}){
data['workplace_id'] = getWorkplaceId()
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