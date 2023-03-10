<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">邮箱</label>
                  <validation-provider
                    name="email"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="username"
                        v-model="username"
                        placeholder="请输入用户名"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid">
                      <span style="color: #c00">{{ errors[0] }}</span>
                    </div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <Validation-Provider
                    name="password"
                    rules="required|min:6"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="password"
                        v-model="password"
                        placeholder="请输入密码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid">
                      <span style="color: #c00">{{ errors[0] }}</span>
                    </div>
                  </Validation-Provider>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">验证码</label>
                  <ValidationProvider
                    name="code"
                    rules="required|length:4"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="code"
                        v-model="code"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid svg">
                      <span v-html="svg" @click="_getCode()"></span>
                    </div>
                    <div class="layui-form-mid">
                      <span style="color: #c00">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" lay-submit>
                    立即登录
                  </button>
                  <span style="padding-left: 20px">
                    <router-link :to="{ name: 'forget' }">忘记密码</router-link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate"
import getCode from "../api/login"
import { v4 as uuidv4 } from "uuid"

export default {
  data() {
    return {
      username: "",
      password: "",
      code: "",
      svg: "",
    }
  },

  components: {
    ValidationProvider,
  },

  mounted() {
    //声明验证码对应的标识符sid
    let sid
    if (localStorage.getItem(sid)) {
      //浏览器本地有没有存储sid
      sid = localStorage.getItem(sid)
    } else {
      sid = uuidv4() //使用uuid生成随机标识符
      localStorage.setItem("sid", sid) //setItem(key, value)
    }
    // 为了其他组件也能使用sid，用vuex进行数据管理
    this.$store.commit("setSid", sid)

    // 页面加载完成就会显示验证码
    this._getCode()
  },

  methods: {
    _getCode() {
      let sid = this.$store.state.sid
      getCode(sid).then((res) => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.svg {
  position: relative;
  top: -15px;
}
</style>
