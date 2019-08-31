import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less' // 引入初始化样式 包括 margin padding li
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册elementUI组件 任意位置都可以使用
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
