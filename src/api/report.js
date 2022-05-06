import request from '@/utils/request'

export function report_api(data,method){
    return request.request({
        method: method,
          url: "report/",
          data: data,
    })
}

export function report_get(data){
    return request.request({
        method: "get",
          url: "report/",
          params: data,
    })
}

export function report_put(data){
    return request.request({
        method: "put",
          url: "report/",
          data: data,
    })
}

export function report_create(data){
    return request.request({
        method: "post",
          url: "reporte/",
          data: data,
    })
}

export function report_del(data){
    return request.request({
        method: "delete",
          url: "report/",
          data: [data],
    })
}