import Home from '@/components/Main/Main'
import Login from '@/components/Login/Login'
import home_router_part from './home-parts/companyRouter'

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
  redirect: '/home',
  component : Home
}

const homeRouter = {
  path: '/home',
  component: Home,
  //children: [home_router_part]
};
const routes = [loginRouter, homeRouter, home_redirect];

export default routes





