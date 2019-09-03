// 处理axios拦截器 请求拦截器 响应拦截器
import axios from 'axios'
import router from '../permission'
import { Message } from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值基础地址

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // config 是axios的默认请求配置 和传入的配置 结合出来的
  // 必须将config return 不return 不行
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}` // 统一注入token
  return config
}, function () {})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 507:
      message = '服务器或数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      window.localStorage.clear() // 因为token有可能过期 清除垃圾token
      router.push('/login')
      break
    default:
      message = '未知错误'
      break
  }
  Message({ type: 'warning', message })
  return new Promise(function () {}) // 直接返回一个promise 表示错误已经被处理掉 相当于强行截止错误
})

// export default {
//   install: function (Vue) {
//     Vue.prototype.$axios = axios // 给Vue对象的原型属性赋值 那么所有vue实例自动拥有$axios
//   }
// }
export default axios
