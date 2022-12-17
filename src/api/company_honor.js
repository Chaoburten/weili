import request from '../utils/request'
const api = {
  list: 'company_honor.php'
}

export function list () {
  // return request.get(api.list, {
  //     params
  // })
  return request({
    url: api.list
  })
}
