import router from './router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach(function (to, from, next) {
  nprogress.start() // 开启进度条
  // 如果要去的地址以/home为起始 就说明需要判断当前是不是登录 判断token
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 放行
      next()
    } else {
      next('/login')
    }
  } else {
    // 如果没有/home 可以认为你是安全的 不需要控制的页面
    next()
  }
})
router.afterEach(function () {
  // 关闭进度条
  nprogress.done() // 关闭进度条
})
export default router
