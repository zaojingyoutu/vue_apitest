import request from '@/utils/request'
import {getWorkplaceId} from '@/utils/getWorkplaceId'

export function workplace_user_api(data={},method){
    data['workplace_user_id'] = getWorkplaceId()
    return request.request({
        method: method,
          url: "workplace_user/",
          data: data,
    })
}

export function workplace_user_get(data = {}){
    data['workplace_user_id'] = getWorkplaceId()
    return request.request({
        method: "get",
          url: "workplace_user/",
          params: data,
    })
}

export function workplace_user_put(data){
    return request.request({
        method: "put",
          url: "workplace_user/" + data.id,
          data: data,
    })
}

export function workplace_user_create(data={}){
    data['workplace_user_id'] = getWorkplaceId()
    return request.request({
        method: "post",
          url: "workplace_user/",
          data: data,
    })
}

export function workplace_user_del(data){
    return request.request({
        method: "delete",
          url: "workplace_user/",
          data: [data],
    })
}
