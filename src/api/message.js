import request from '../utils/request'
import qs from 'qs'
const api = {
  save: 'message.php'
}
export function save (data) {
  return request({
    method: 'post',
    url: api.save,
    data: qs.stringify(data)
  })
}
