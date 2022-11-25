import request from '@/utils/request'

export function dictFotmat_post(data){
    return request.request({
        method: "post",
          url: "dictformat/",
          data: data,
    })
}