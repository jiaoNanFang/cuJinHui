
import Vue from 'vue'
import App from './App'
import router from './router/index'
import api from './api/index'
import 'swiper/css/swiper.min.css'
// import 'element-ui/lib/theme-chalk/index.css'

import { Message  } from 'element-ui';
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.use(Message )//消息提示

import VideoPlayer from 'vue-video-player'
import'video.js/dist/video-js.css'
import'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)


Vue.use(api)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
