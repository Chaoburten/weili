import request from '../utils/request'
const api = {
  category: 'category.php',
  list: 'news.php',
  read: 'news_detail.php'
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
    params // params:params  sortid
  })
}
export function read (params) {
  // return request.get(api.list, {
  //     params
  // })
  return request({
    url: api.read,
    params // params:params  sortid
  })
}
