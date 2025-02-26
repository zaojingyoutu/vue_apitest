import request from '@/utils/request'

export function common_case_api(data,method){
    return request.request({
        method: method,
          url: "common-testcase/",
          data: data,
    })
}

export function common_case_get(data){
    return request.request({
        method: "get",
          url: "common-testcase/",
          params: data,
    })
}

export function common_case_put(data){
    return request.request({
        method: "put",
          url: "common-testcase/",
          data: data,
    })
}

export function common_case_create(data){
    return request.request({
        method: "post",
          url: "common-testcase/",
          data: data,
    })
}

export function common_case_del(data){
    return request.request({
        method: "delete",
          url: "common-testcase/" + data,
    })
}

