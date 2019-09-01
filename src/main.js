import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui' // 框架组件
import Component from './components' // 自定义组件
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less' // 引入初始化样式 包括 margin padding li
import axios from './utils/axios.config'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册elementUI组件 任意位置都可以使用
Vue.use(Component) // 全局注册自定义组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
