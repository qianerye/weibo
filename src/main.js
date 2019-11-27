import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { format } from 'timeago.js';
Vue.filter('changeTime', function(dateStr) {
    return format(dateStr, 'zh_CN');
})

import 'assets/libs/reset.css'
import 'assets/libs/icon.css'
import 'assets/libs/common.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
