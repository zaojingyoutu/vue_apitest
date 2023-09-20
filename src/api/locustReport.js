import request from '@/utils/request'
export function locustReportGet(data){
    return request.request({
        method: "get",
        url: "locustReport/",
        params: data,
    })
}
export function locustReportDetail(id){
    return request.request({
        method: "get",
        url: "locustReport/" + id,

    })
}


export function locustReportDel(id){
    return request.request({
        method: "delete",
        url: "locust/" + id +"/",
    })
}