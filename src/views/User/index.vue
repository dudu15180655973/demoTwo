<template>
  <div class="user">
    <!-- 头像及点击登录部分 -->
    <van-row gutter="20">
      <van-col span="6">
        <img :src="avatarimg" alt="" />
      </van-col>
      <van-col span="10" @click="loginhander">点击登录</van-col>
      <van-col span="8"><van-icon name="arrow" /></van-col>
    </van-row>
    <!-- 遮罩层 -->
    <div class="login-modle" v-if="falgmodel">
      <div class="modlebox" @click="clickhander"></div>
      <!-- 登录表单 -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Getlogin } from '@/request/api'
export default {
  name: 'User',
  data() {
    return {
      avatarimg: require('@/assets/avatarimg.webp'),
      username: '',
      password: '',
      // 控制遮罩层
      falgmodel: false
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    // 点击遮罩层取消登录框
    clickhander() {
      this.falgmodel = !this.falgmodel
    },
    // 点击登录显示登录框
    loginhander() {
      this.falgmodel = true
    }
  }
}
</script>

<style lang="less" scoped>
.van-row {
  padding: 20px 4%;
  background: #333;
  color: #fff;
  .van-col {
    line-height: 80px;
    font-size: 18px;
    img {
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    &:last-child {
      text-align: right;
    }
  }
}
.login-modle {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  .modlebox {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
  .van-form {
    width: 90%;
    position: absolute;
    top: 40vh;
    left: 50%;
    margin-left: -45%;
    padding: 10px;
    background: #fff;
  }
}
</style>
