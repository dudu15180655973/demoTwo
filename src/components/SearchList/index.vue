<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
      <van-cell
        v-for="item in searchdata"
        :key="item"
        :title="item"
        @click="clickander(item)"
      />
    </van-list>
  </div>
</template>

<script>
export default {
  props: ['searchdata'],
  data() {
    return {
      list: [],
      loading: false,
      finished: true
    }
  },
  methods: {
    clickander(item) {
      this.$emit('clickander', item)
    }
  }
}
</script>

<style></style>
