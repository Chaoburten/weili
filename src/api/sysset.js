import request from '../utils/request'
const api = {
  list: 'sysset.php'
}

export function list (params) {
  // return request.get(api.list, {
  //     params
  // })
  return request({
    url: api.list,
    params // params:params  sortid
  })
}
