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
