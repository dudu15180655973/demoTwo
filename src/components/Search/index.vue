<template>
  <div class="search">
    <van-search
      v-model="searchval"
      show-action
      :placeholder="placeholder"
      @search="onSearch"
      @cancel="onCancel"
    />
    <Historyhot />
  </div>
</template>

<script>
import Historyhot from '@/components/Historyhot'
export default {
  name: 'Search',
  data() {
    return {
      searchval: '',
      placeholder: ''
    }
  },
  components: {
    Historyhot
  },
  methods: {
    // 搜索事件
    onSearch() {},
    onCancel() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #eee;
}
</style>
