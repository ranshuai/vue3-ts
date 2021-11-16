import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV, // api 的 base_url
  timeout: 5000 // request timeout
})
service.interceptors.request.use(
  (config:any) => {
    // Do something before request is sent
    return config
  },
  (error:any) => {
    // Do something with request error
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */

  (response:any) => {
    const res = response.data
    if (!res.code) {
      // token 过期
      if (res.code === '10201' || res.code === '10203' || res.code === '10202') {
      } else {
      }
      return response.data
    } else {
      return response.data
    }
  },
  (error:any) => {
    return Promise.reject(error)
  }
)

export default service
