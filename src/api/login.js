import axios from "../utils/axios"

const getCode = () => {
  return axios.get("/getCaptcha")
}

export default getCode
