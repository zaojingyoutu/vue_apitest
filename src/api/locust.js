import request from '@/utils/request'
import {getWorkplaceId} from '@/utils/getWorkplaceId'

export function locust_api(data,method){
    return request.request({
        method: method,
          url: "locust/",
          data: data,
    })
}

export function locust_get(data ={}){
    data['workplace_id'] = getWorkplaceId()
    return request.request({
        method: "get",
          url: "locust/",
          params: data,
    })
}
export function locust_detail(id){
    return request.request({
        method: "get",
          url: "locust/" + id,

    })
}
export function locust_put(data){
    return request.request({
        method: "put",
          url: "locust/" + data.id +"/",
          data: data,
    })
}

export function locust_create(data){
    return request.request({
        method: "post",
          url: "locust/",
          data: data,
    })
}

export function locustRun(data){
    return request.request({
        method: "post",
          url: "runLocust/",
          data: data,
    })
}

export function locust_del(id){
    return request.request({
        method: "delete",
          url: "locust/" + id +"/",
    })
}