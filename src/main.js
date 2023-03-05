import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

import "./util/veeValidate"

axios.defaults.baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000" //开发环境下，服务器根目录是我们的端口
    : "http://www.domain.com" //生产模式下，是网页域名.com

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
