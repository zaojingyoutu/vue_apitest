import request from '@/utils/request'

export function timezone_api(data,method){
    return request.request({
        method: method,
          url: "timezone/",
          data: data,
    })
}

export function timezone_post(data){
    return request.request({
        method: "post",
          url: "timezone/",
          data: data,
    })
}

export function timezone_get(data){
    return request.request({
        method: "get",
          url: "timezone/",
          data: data,
    })
}