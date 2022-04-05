<template>
  <ul class="canpinglist">
    <li class="chanping" v-for="item in goodsList" :key="item.id">
      <img
        :src="item.list_pic_url"
        width="100%"
        style="display: block"
        alt=""
      />
      <div class="canpingname van-ellipsis">{{ item.name }}</div>
      <div class="canpingjiage">{{ item.retail_price | filtermoney }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['goodsList'],
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.canpinglist {
  padding: 10px 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .chanping {
    width: 49%;
    background: #fff;
    margin-bottom: 10px;
    line-height: 30px;
    .canpingname {
      text-align: center;
      font-weight: 900;
    }
    .canpingjiage {
      text-align: center;
      color: red;
    }
  }
}
</style>
