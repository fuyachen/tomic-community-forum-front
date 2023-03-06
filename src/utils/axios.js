import axios from "axios"
import errorHandle from "./errorHandle"

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://your.domain.com",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    console.log("配置:", config)
    //需要返回config，配置才能生效
    return config
  },
  (error) => {
    // 因为请求、响应拦截器中都要对错误进行处理，因此我们可以封装错误处理函数，在该模块中进行调用
    errorHandle(error)
    //Promise.reject(error)是Promise的静态方法，相当于new Promise((resolve, reject) => { reject("error") })
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return res.data
    } else {
      return Promise.reject(res)
    }
  },
  (error) => {
    debugger
    errorHandle(error)
    return Promise.reject(error)
  }
)

export default instance
