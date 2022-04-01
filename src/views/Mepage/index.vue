<template>
  <div class="mepage">
    <!-- 搜索框 -->
    <van-search
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
      @click="gotosearch"
      disabled
    />
    <div class="swipebanner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="skyblue">
        <van-swipe-item v-for="item in banner" :key="item.id">
          <img
            :src="item.image_url"
            alt=""
            width="100%"
            style="display: block"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 滑入效果 -->
    <transition name="van-slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { GetMepagedata } from '@/request/api'
export default {
  name: 'Mepage',
  data() {
    return {
      // 轮播图
      banner: []
    }
  },
  methods: {
    gotosearch() {
      this.$router.push('/mepage/search')
    }
  },
  created() {
    GetMepagedata()
      .then((res) => {
        // console.log(res.data.banner)
        if (res.errno == 0) {
          let { banner } = res.data
          this.banner = banner
          // console.log(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" scoped>
// 右滑的样式
// .swipebanner {
//   width: 100%;
//   height: 200px;
// }
// .slide-enter,
// .slide-leave-to {
//   right: -100%;
// }
// .slide-enter-active,
// .slide-leave-active {
//   transition: right 1s linear;
// }
// .slide-enter-to,
// .slide-leave {
//   right: 0;
// }
</style>
