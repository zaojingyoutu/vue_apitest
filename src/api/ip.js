import request from '@/utils/request'

export function ip_api(data,method){
    return request.request({
        method: method,
          url: "ip/",
          data: data,
    })
}

export function ip_get(data){
    return request.request({
        method: "get",
          url: "ip/",
          params: data,
    })
}
