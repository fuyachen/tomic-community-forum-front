import axios from "../utils/request"

const getCode = (sid) => {
  return axios.get("/getCaptcha", {
    // 传递sid参数，`params` 是与请求一起发送的 URL 参数；在koa服务器中通过ctx.request.query获取
    params: {
      sid: sid,
    },
  })
}

export default getCode
