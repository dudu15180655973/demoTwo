<template>
  <div>
    <div class="historyhot" v-if="clearfn">
      <div class="topbox">
        <h4>历史记录</h4>
        <van-icon name="delete-o" @click="clearhistory" />
      </div>
      <div class="bottombox">
        <van-tag
          plain
          type="primary"
          v-for="item in historylist"
          :key="item"
          class="tag"
          @click="clickander(item)"
          >{{ item }}</van-tag
        >
      </div>
    </div>
    <div class="historyhot">
      <div class="topbox">
        <h4>热门搜索</h4>
      </div>
      <div class="bottombox">
        <van-tag
          plain
          :type="item.is_hot ? 'primary' : 'danger'"
          v-for="item in hotlist"
          :key="item.keyword"
          class="tag"
          @click="clickander(item.keyword)"
          >{{ item.keyword }}</van-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Gethistoryhot, Clearhistory } from '@/request/api'
export default {
  data() {
    return {
      historylist: [],
      hotlist: [],
      clearfn: true
    }
  },
  created() {
    this.gethistoryhot()
  },
  methods: {
    // 清除历史数据
    async clearhistory() {
      const res = await Clearhistory()
      if (res.errno == 0) {
        this.$toast.success('成功文案')
        setTimeout(() => {
          this.clearfn = false
        }, 1000)
      }
    },
    // 请求历史和热门的数据
    async gethistoryhot() {
      const res = await Gethistoryhot()
      if (res.errno == 0) {
        const { historyKeywordList, hotKeywordList, defaultKeyword } = res.data
        this.historylist = historyKeywordList
        this.hotlist = hotKeywordList
        // 触发自定义事件
        this.$emit('getData', defaultKeyword)
      }
      console.log(res)
    },
    // 点击标签搜索相关产品
    clickander(item) {
      // console.log(item)
      this.$emit('clickander', item)
    }
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
