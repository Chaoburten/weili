import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://weiliapi.yzc0930.top/',
  timeout: 5000
})

// 添加相应拦截器
// instance.interceptors.response.use(
//   function (response) {
//     // 对响应数据做点什么
//     console.log('先执行', response)
//     const data = response.data
//     if (data.code !== 0) {
//       return Promise.reject(data.msg)
//     }
//     return response
//   },
//   function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error)
//   }
// )
// 导出
export default instance
