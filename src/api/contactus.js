import request from '../utils/request'
const api = {
  list: 'contactus.php'
}
export function list () {
  return request.get(api.list)
}
