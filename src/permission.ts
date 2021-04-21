import { NavigationGuardNext } from 'vue-router'
import router from './router'
import { setToken, getToken } from './utils/auth'
import { ElMessage } from 'element-plus'
import { sleep } from './utils/common'

const whiteList = ['/login', '/demo']
const LOGIN_PATH = '/login'
const path:string = import.meta.env.VUE_APP_LOGIN as string || LOGIN_PATH

function toLogin (next: NavigationGuardNext) {
  if (/^http/.test(path)) {
    document.location.href = path
  } else {
    next(path)
  }
}

router.beforeEach(async (to, from, next) => {
  const newToken = to.query.token

  if (newToken && typeof newToken === 'string') {
    setToken(newToken)
  }

  const hasToken = getToken()
  if (hasToken) {
    // 判断用户权限
    const flag = true
    if (flag) {
      if (to.path === LOGIN_PATH) {
        next('/')
      } else {
        next()
      }
    } else {
      ElMessage('您的用户没有访问权限')
      await sleep(3000)
      toLogin(next)
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { //  白名单
      next()
    } else {
      toLogin(next)
    }
  }
})
