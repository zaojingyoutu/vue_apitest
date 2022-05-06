import request from '@/utils/request'

export function testplan_api(data,method){
    return request.request({
        method: method,
          url: "testplan/",
          data: data,
    })
}

export function testplan_get(data){
    return request.request({
        method: "get",
          url: "testplan/",
          params: data,
    })
}

export function testplan_put(data){
    return request.request({
        method: "put",
          url: "testplan/",
          data: data,
    })
}

export function testplan_create(data){
    return request.request({
        method: "post",
          url: "testplan/",
          data: data,
    })
}

export function testplan_del(data){
    return request.request({
        method: "delete",
          url: "testplan/",
          data: [data],
    })
}