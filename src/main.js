// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueGitment from 'vue-gitment'
import 'styles/reset.css'
import 'styles/iconfont.css'
import Axios from 'axios'
import hljs from 'highlight.js'
import 'highlight.js/styles/xcode.css' // 样式文件
import 'gitment/style/default.css'
import {formatDate} from './utils'

Vue.use(VueGitment)

Vue.filter('formatDate', (value, type) => {
  return formatDate(value, type)
})

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
