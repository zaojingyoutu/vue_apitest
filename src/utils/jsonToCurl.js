
export function curl_dumps(requestData) {
    let curl = 'curl '
    if (requestData.method != 'POST' && requestData.method != 'GET') {
      curl += `-X ${requestData.method} `
    }
    let url = requestData.parameter ? `${requestData.url}?${Object.entries(JSON.parse(requestData.parameter)).map(([key, value]) => `${key}=${value}`).join('&')}` : requestData.url
    curl += url 
    
    if (requestData.header) {
      let headers = JSON.parse(requestData.header)
      for (let [key, value] of Object.entries(headers)) {
        curl += ` -H '${key}: ${value}'`
      }
    }
    
    if (requestData.data) {
      curl += ` --data-raw '${requestData.data.content}'` 
    } 
    
    curl += ' --compressed'
    return curl
  }
  