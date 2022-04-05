<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="综合" disabled />
      <van-dropdown-item
        v-model="value1"
        title="价格"
        :options="optionarr"
        @change="pricedata"
      />
      <van-dropdown-item
        v-model="Categoryvalue"
        title="分类"
        :options="filterCategory"
        @change="meshopingdata"
      />
    </van-dropdown-menu>
    <van-empty
      image="search"
      v-if="goodsList.length == 0"
      description="无相关商品"
    />
    <Canpingzujian v-else :goodsList="goodsList" />
  </div>
</template>

<script>
import Canpingzujian from '@/components/Canpingzujian'
export default {
  props: ['filterCategory', 'goodsList'],
  data() {
    return {
      value1: 0,
      Categoryvalue: 0,
      optionarr: [
        { text: '价格从低到高', value: 'asc' },
        { text: '价格从高到低', value: 'desc' }
      ]
    }
  },
  components: {
    Canpingzujian
  },
  methods: {
    // 子传父：选中分类将信息传递给搜索框
    meshopingdata(value) {
      this.$emit('meshopingdata', value)
    },
    // 子传父：选中价格将信息传递给搜索框
    pricedata(value) {
      this.$emit('pricedata', value)
    }
  },
  mounted() {
    // 选择分类：选中分类打勾
    this.filterCategory.map((val, index) => {
      if (val.checked) {
        this.Categoryvalue = val.value
      }
    })
  }
}
</script>

<style></style>
