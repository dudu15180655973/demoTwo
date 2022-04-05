import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/commonCss/resetStyle.css'
import 'vant/lib/index.css'
import '@/vantui/index'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

// 过滤器
Vue.filter('filtermoney', function (val) {
  return '￥' + val.toFixed(2) + '元'
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
