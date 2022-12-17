import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 高德地图
import VueAMap from 'vue-amap'
// swiper3幻灯
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

Vue.use(VueAMap)

// 高度地图初始化
VueAMap.initAMapApiLoader({
  key: 'd85a9ef6a0cfcae13f1597f5a7e41e9c',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
  // 默认高德sdk版本
  v: '1.4.4'
})

Vue.config.productionTip = false
Vue.use(ElementUI)

// 路由守卫
router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  // console.log(document.title)
  if (to.path === '/') {
    document.title = to.meta.title + ' - ' + to.meta.content.description
  } else if (to.meta.title) { // 判断是否有标题
    document.title = to.meta.title + ' - ' + '南昌为力人力资源服务有限公司'
  }
  if (to.meta.content) {
    const head = document.getElementsByTagName('head')
    const meta = document.createElement('meta')
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute('content', to.meta.content.keywords)
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', to.meta.content.description)
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  next()// 执行进入路由，如果不写就不会进入目标页
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
