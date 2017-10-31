/*
 * Created by chao on 2017/9/29.
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Get, Post, cookie} from '@/api/api'   
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(Mint)

Vue.prototype.$get = Get
Vue.prototype.$post = Post
Vue.prototype.$cookie = cookie


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
