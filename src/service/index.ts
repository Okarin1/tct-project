import XLRequest from './request'
import { BASE_URL } from './request/config'

const xlRequest = new XLRequest({
  baseURL: BASE_URL,
  // 实例的拦截器
  interceptors: {
    requestInterceptors(config) {
      return config
    },
    requestInterceptorsCatch(err) {},
    responseInterceptors(res) {
      return res
    },
    responseInterceptorsCatch(err) {}
  }
})

export { xlRequest }
