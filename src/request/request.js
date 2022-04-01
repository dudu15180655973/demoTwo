// 二次封装axios
import axios from 'axios' //它是一个HTTP工具，用于与后端进行数据交互。
//生产环境
//测试环境
//开发环境
// const baseURL = "http://localhost:8080"
//要是跨域的话，就请求本地服务器跳转到vue.config.js解决跨域问题

//创建一个axios实例
const instance = axios.create({
  baseURL: '',
  timeout: 7000,
  headers: {}
})

//封装请求拦截器
instance.interceptors.request.use(
  (config) => {
    //每次发送请求之前都要携带token鉴定身份去访问后端数据库
    // config.accessToken = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//封装响应拦截器
instance.interceptors.response.use(
  (res) => {
    // console.log('响应拦截器', res)
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
