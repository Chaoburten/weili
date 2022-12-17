import request from '../utils/request'
const api = {
  list: 'recruitment_info.php',
  read: 'recruitment_info_detail.php'
}
// 导出
export function list (params) {
  // return request.get(api.list, {
  //     params
  // })
  return request({
    url: api.list,
    params
  })
}
export function read (params) {
  // return request.get(api.list, {
  //     params
  // })
  return request({
    url: api.read,
    params
  })
}
