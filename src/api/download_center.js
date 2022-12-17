import request from '../utils/request'
const api = {
  list: 'download_center.php'
}
// 导出

export function list () {
  // return request.get(api.list, {
  //     params
  // })
  return request({
    url: api.list
  })
}
