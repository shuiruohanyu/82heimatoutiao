// 把评论相关的请求方法 放在这个地方
import axios from '../utils/axios.config'
import api from '../constant/api'
export function getComments (params) {
  return axios({
    url: api.API_ARTICLES,
    params
  })
}
export function openOrClose (params, data) {
  return axios({
    url: api.API_COMMENT,
    method: 'put',
    params,
    data
  })
}
