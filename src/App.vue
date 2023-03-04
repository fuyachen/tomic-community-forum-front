<template>
  <div>
    <Header></Header>
    <body>
      <router-view></router-view>
    </body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
</style>
