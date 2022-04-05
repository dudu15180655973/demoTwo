<template>
  <div class="search">
    <van-search
      v-model="searchval"
      show-action
      :placeholder="placeholder"
      @input="onSearch"
      @cancel="onCancel"
    />
    <Historyhot
      @getData="getDefaultKeyword"
      v-if="flag"
      @clickander="clickander"
    />
    <SearchList
      v-if="!flag"
      :searchdata="searchdata"
      @clickander="clickander"
    />
    <MeShoping
      v-if="!flag"
      :filterCategory="filterCategory"
      :goodsList="goodsList"
      @meshopingdata="meshopingdata"
      @pricedata="pricedata"
    />
  </div>
</template>

<script>
import Historyhot from '@/components/Historyhot'
import MeShoping from '@/components/MeShoping'
import SearchList from '@/components/SearchList'
import { debounce } from '@/utils/index'
import { Getsearchlist, Getshonplist } from '@/request/api'
export default {
  name: 'Search',
  data() {
    return {
      searchval: '',
      placeholder: '',
      flag: true,
      searchdata: [],
      blockshow: 1,
      // 搜索框商品数据
      filterCategory: [],
      goodsList: '',
      page: 1,
      size: 20,
      order: '',
      categoryId: '',
      sort: ''
    }
  },
  components: {
    Historyhot,
    MeShoping,
    SearchList
  },
  methods: {
    // 点击历史区块和热门区块的标签搜索商品
    clickander(val) {
      this.searchval = val
      this.onSearch()
    },
    // 按分类搜索
    meshopingdata(val) {
      // console.log(val, 33333)
      this.categoryId = val
      this.onSearch()
    },
    // 按价格价格高低排序
    pricedata(val) {
      this.sort = 'price'
      this.order = val
      this.onSearch()
    },
    onSearch: debounce(function (v) {
      this.flag = false
      // this.blockshow == 2
      if (this.searchval === '') {
        this.flag = true
        // this.blockshow == 1
      }
      // 请求搜索框数据
      this.searchList()
      this.shonplist()
    }, 800),
    // 取消的跳转
    onCancel() {
      this.$router.go(-1)
    },
    getDefaultKeyword(val) {
      console.log(val)
      const { keyword } = val
      this.placeholder = keyword
    },
    // 搜索框数据请求
    async searchList() {
      const paranms = {
        keyword: this.searchval
      }
      const res = await Getsearchlist(paranms)
      console.log(res.data)
      this.searchdata = res.data
    },
    // 搜索框商品搜索
    async shonplist() {
      const paranms = {
        keyword: this.searchval,
        page: 1,
        size: 20,
        order: this.order,
        categoryId: this.categoryId,
        sort: this.sort
      }
      const res = await Getshonplist(paranms)
      console.log(res)
      if (res.errno == 0) {
        this.flag = false
        // this.blockshow == 3
        let { filterCategory, goodsList } = res.data
        // 对filterCategory数据处理：将name改为text，id改为value

        // let list = []
        // filterCategory.map((item) => {
        //   console.log(item.value)
        //   let obj = {}
        //   obj['text'] = item.name
        //   obj['value'] = item.id
        //   list.push(obj)
        // })

        let arr = JSON.parse(
          JSON.stringify(filterCategory)
            .replace(/name/g, 'text')
            .replace(/id/g, 'value')
        )
        this.filterCategory = arr
        console.log(this.filterCategory, 11111)
        this.goodsList = goodsList
      }
    }
  }
}
</script>
value
<style lang="less" scoped>
.search {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #eee;
}
</style>
