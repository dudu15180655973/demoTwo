import request from './request'
// 请求首页数据
export const GetMepagedata = () => {
  return request.get('/index/index')
}
// 请求历史和热门数据
export const Gethistoryhot = () => {
  return request.get('/search/index')
}
// 搜索框数据
export const Getsearchlist = (params) => {
  return request.get('/search/helper', { params })
}
// 搜索框商品数据
export const Getshonplist = (params) => {
  return request.get('/goods/list', { params })
}
// 清楚历史记录
export const Clearhistory = () => {
  return request.post('/search/clearhistory')
}
