import { extend, localize } from "vee-validate"
import {
  required,
  email,
  length,
  min,
  max,
  confirmed,
} from "vee-validate/dist/rules"

import zh from "vee-validate/dist/locale/zh_CN.json"

// extend用于拓展官方rules，extend('name', rule)
extend("required", required)
extend("email", email)
extend("length", length)
extend("min", min)
extend("max", max)
extend("confirmed", confirmed)

localize("zh_CN", {
  messages: {
    ...zh.messages,
    required: "请输入{_field_}",
  },
  names: {
    email: "邮箱",
    password: "密码",
    name: "昵称",
    username: "账号",
    code: "验证码",
  },
})
