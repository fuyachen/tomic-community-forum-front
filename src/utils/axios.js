// 封装axios的请求，返回重新封装的数据格式
// 对错误的统一处理
import axios from "axios"
import errorHandle from "./errorHandle"

// 封装axios请求类（axios实例的模板）
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  // 获取axios配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      timeout: 10000,
    }
    return config
  }
  // 设定拦截器
  interceptors(instance) {
    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        errorHandle(err)
        return Promise.reject(err)
      }
    )

    // 响应请求的拦截器
    instance.interceptors.response.use(
      (res) => {
        if (res.status === 200) {
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res)
        }
      },
      (err) => {
        errorHandle(err)
        return Promise.reject(err)
      }
    )
  }
  // 创建实例
  request(options) {
    const instance = axios.create()
    // Object.assign(target, resource)对对象进行浅拷贝，将resource对象中的属性拷贝到target中（属性冲突时，target的属性值将被覆盖）
    // 这里给axios实例拷贝了类中的通用config，同时设置了每个请求中不同的配置，如method、url、body等
    const newOptions = Object.assign(this.getInsideConfig(), options)
    // 绑定拦截器
    this.interceptors(instance)
    return instance(newOptions)
  }
  // 常见的get、post请求
  get(url, config) {
    const options = Object.assign(
      {
        method: "get",
        url: url,
      },
      config
    )
    return this.request(options)
  }
  post(url, data) {
    return this.request({
      method: "post",
      url: url,
      data: data,
    })
  }
}

export default HttpRequest
