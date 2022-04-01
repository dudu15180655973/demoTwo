import request from './request'
// 请求首页数据
export const GetMepagedata = () => {
  return request.get('/index/index')
}
export const Gethistoryhot = () => {
  return request.get('/search/index')
}
