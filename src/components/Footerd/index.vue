<template>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item icon="home-o" to="/mepage">首页</van-tabbar-item>
    <van-tabbar-item icon="label-o" to="/topic">专题</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="manager-o" to="/user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    set: (newValue) => {
      this.$route.path = newValue
    }
  },
  computed: {
    active: {
      get() {
        switch (this.$route.path) {
          case '/mepage':
            return 0
          case '/topic':
            return 1
          case '/category':
            return 2
          case '/cart':
            return 3
          case '/user':
            return 4
          default:
            break
        }
      },
      set() {}
    }
  }
}
</script>

<style></style>
