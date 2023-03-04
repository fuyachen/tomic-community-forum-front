import Vue from "vue"
import VueRouter from "vue-router"
// 路由懒加载
const Login = () => import("../views/Login.vue")
const Forget = () => import("../views/Forget.vue")
const Reg = () => import("../views/Reg.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/forget",
    name: "forget",
    component: Forget,
  },
  {
    path: "/Reg",
    name: "reg",
    component: Reg,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
