import request from '../utils/request'
import qs from 'qs'
const api = {
  category: 'category.php',
  list: 'recruitment.php',
  read: 'recruitment_detail.php',
  save: 'jobseekers.php'
}
// 导出
export function category (params) {
  // return request.get(api.category)
  return request({
    url: api.category,
    params
  })
}
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
export function save (data) {
  return request({
    method: 'post',
    url: api.save,
    data: qs.stringify(data)
  })
}
