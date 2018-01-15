import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

import store from '../store/entry'
import * as localStore from '@/handler/LocalStore.js'


/**
 * 路由入口文件,将vue-router挂载到vue
 * 实例化before,after
 * 定义router.config
 * routes = 所有路由集合
 * @type {{mode: string, routes: [*]}}
 */
Vue.use(VueRouter);
const route_config = {
  mode: 'hash', //history模式用不了？？！！！
  routes: routes
};

const router = new VueRouter(route_config);

const clearSessStore = () => {
  const commit = store.dispatch;
  localStore.clear('sess',commit)
}

router.beforeEach((to, from, next) => {
  const isLogin = store.getters.getLogin;
  const status = store.getters.getLoginStatus;
  console.log('islogin=', isLogin, 'status=', status)
  console.info(to.path)
  if (isLogin && status.toString() === 'OK') {
    if (to.path === '/login'){
      clearSessStore();//登陆信息OK状态时访问/login清除store和localstore
    }
    next()
  } else {//登陆信息不OK时跳转到login
    if (to.path === '/login') {
      next();
    } else {
      next({path: '/login'})
    }
  }
});

export default router;
