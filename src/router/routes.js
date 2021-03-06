import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login.vue'
import home_children from './home_children'

/**
 * home.router集合。汇总所有'/home'路径下的路由，也是本项目的主要路由
 * 由home_child打包
 * @type {{path: string, component}}
 */


const loginRouter = {
  path: '/login',
  component: Login
}

const home_redirect = {
  path: '/',
  redirect: '/v1.0',
  component: Home
}

const homeRouter = {
  path: '/v1.0',
  component: Home,
  children: home_children
};
const routes = [loginRouter, homeRouter, home_redirect];

export default routes





