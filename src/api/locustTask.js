import request from '@/utils/request'

export function locustTaskPost(data){
    return request.request({
        method: "post",
          url: "locustTask/",
          data: data,
    })
}

export function locustTaskGet(data){
    return request.request({
        method: "get",
          url: "locustTask/",
          data: data,
    })
}

export function locustTaskDetails(id){
    return request.request({
        method: "get",
          url: "locustTask/" + id,
    })
}

export function locustTaskDel(id){
    return request.request({
        method: "delete",
          url: "locustTask/" + id,
    })
}

