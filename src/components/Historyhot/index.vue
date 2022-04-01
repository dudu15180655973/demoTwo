<template>
  <div>
    <div class="historyhot">
      <div class="topbox">
        <h4>历史记录</h4>
        <van-icon name="delete-o" />
      </div>
      <div class="bottombox">
        <van-tag plain type="primary" v-for="item in 14" :key="item" class="tag"
          >标签</van-tag
        >
      </div>
    </div>
    <div class="historyhot">
      <div class="topbox">
        <h4>热门搜索</h4>
      </div>
      <div class="bottombox">
        <van-tag plain type="primary" v-for="item in 14" :key="item" class="tag"
          >标签</van-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Gethistoryhot } from '@/request/api'
export default {
  data() {
    return {
      historylist: '',
      hotlist: ''
    }
  },
  created() {
    Gethistoryhot()
      .then((res) => {
        // console.log(res.data.banner)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" scoped>
.historyhot {
  padding: 0 8px;
  margin-bottom: 20px;
  background: #fff;
  .topbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
  }
  .bottombox {
    .tag {
      //   margin-left: 10px;
      //   margin-top: 8px;
      //   margin-bottom: 10px;
      margin: 3px 0 10px 10px;
    }
  }
}
</style>
>
