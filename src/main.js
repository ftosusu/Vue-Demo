import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Router from 'vue-router'
import AMap from 'vue-amap'
import Video from 'video.js'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import routerConfig from './router.config.js'
import './ElementUi.js'

axios.interceptors.request.use(function(config){
  return config
},function(error){
  return Promise.reject(error)
})

axios.interceptors.response.use(function(response){
  return response
},function(error){
  return Promise.reject(error)
})

Vue.prototype.$http = axios

Vue.use(AMap)
Vue.use(Router)
Vue.use(VueVideoPlayer)
Vue.prototype.$video = Video


const router = new Router(routerConfig)

AMap.initAMapApiLoader({
  // 高德key
  key: '0dc766203ea71c826cd13c819ddd4738',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
