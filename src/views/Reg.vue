<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
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
                        placeholder="将会成为您唯一的登录名"
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
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <validation-provider
                    name="name"
                    rules="required|min:4|name"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="name"
                        v-model="name"
                        placeholder="请输入昵称"
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
                  <validation-provider
                    name="password"
                    rules="required|min:6|max:16|confirmed:confirmation"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="password"
                        v-model="password"
                        placeholder="密码为6-16个字符"
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
                  <validation-provider v-slot="{ errors }" vid="confirmation">
                    <div class="layui-row">
                      <label
                        for="L_repass"
                        rules="required"
                        class="layui-form-label"
                        >确认密码</label
                      >
                      <div class="layui-input-inline">
                        <input
                          type="password"
                          name="repassword"
                          v-model="repassword"
                          placeholder="请输入密码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                    </div>
                    <div class="layui-row">
                      <span style="color: #c00">{{ errors[0] }}</span>
                    </div>
                  </validation-provider>
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
                    立即注册
                  </button>
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
import getCode from "../api/login"
import { ValidationProvider } from "vee-validate"

export default {
  name: "reg",
  data() {
    return {
      username: "",
      name: "",
      password: "",
      repassword: "",
      code: "",
      svg: "",
    }
  },
  components: {
    ValidationProvider,
  },
  mounted() {
    this._getCode()
  },
  methods: {
    _getCode() {
      getCode().then((res) => {
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
