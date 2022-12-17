import request from '../utils/request'
const api = {
  list: 'home.php'
}
export function list () {
  return request({
    url: api.list
  })
}
