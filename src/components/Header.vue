<template>
  <div>
    <div class="fly-header layui-bg-black">
      <div class="layui-container">
        <a class="fly-logo" href="/">
          <img src="../assets/images/logo.png" alt="layui" />
        </a>
        <ul class="layui-nav fly-nav layui-hide-xs">
          <li class="layui-nav-item layui-this">
            <a href="/"><i class="iconfont icon-jiaoliu"></i>交流</a>
          </li>
          <li class="layui-nav-item">
            <a href="case/case.html"
              ><i class="iconfont icon-iconmingxinganli"></i>案例</a
            >
          </li>
          <li class="layui-nav-item">
            <a href="/" target="_blank"><i class="iconfont icon-ui"></i>框架</a>
          </li>
        </ul>

        <ul class="layui-nav fly-nav-user">
          <!-- 未登入的状态 -->
          <li class="layui-nav-item">
            <a
              class="iconfont icon-touxiang layui-hide-xs"
              href="../user/login.html"
            ></a>
          </li>
          <li class="layui-nav-item">
            <a href="../user/login.html">登入</a>
          </li>
          <li class="layui-nav-item">
            <a href="../user/reg.html">注册</a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href=""
              onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
              title="QQ登入"
              class="iconfont icon-qq"
            ></a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href=""
              onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
              title="微博登入"
              class="iconfont icon-weibo"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
