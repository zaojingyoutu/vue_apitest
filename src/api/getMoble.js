import request from '@/utils/request'


export function getMobile(data){
    return request.request({
        method: "get",
          url: "getMobile/",
          params: data,
    })
}
