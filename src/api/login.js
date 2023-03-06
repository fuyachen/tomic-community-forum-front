import axios from "../utils/request"

const getCode = () => {
  return axios.get("/getCaptcha")
}

export default getCode
