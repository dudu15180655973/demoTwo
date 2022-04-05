<template>
  <div id="app">
    <router-view></router-view>
    <Footerd />
  </div>
</template>
<script>
import Footerd from '@/components/Footerd'
export default {
  name: 'App',
  components: {
    Footerd
  }
}
</script>
<style lang="less" scoped></style>
