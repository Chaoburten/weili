import request from '../utils/request'
const api = {
  list: 'aboutus_1.php'
}

export function list () {
  // return request.get(api.list, {
  //     params
  // })
  return request({
    url: api.list
  })
}
