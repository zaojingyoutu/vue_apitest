import request from '@/utils/request'

export function runTestplan_api(data,method){
    return request.request({
        method: method,
          url: "testplan/",
          data: data,
    })
}

export function runTestplan_post(data){
    return request.request({
        method: "post",
          url: "runtestplan/",
          data: data,
    })
}

export function taskTestplanPost(data){
    return request.request({
        method: "post",
          url: "task/",
          data: data,
    })
}

export function taskDetails(id){
    return request.request({
        method: "get",
          url: "task/" + id,
    })
}

export function Deltask(id){
    return request.request({
        method: "delete",
          url: "task/" + id,
    })
}




