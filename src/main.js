import Vue from 'vue'
import App from './App'
import store from './store/entry'


/**
 * n3,keen-ui,uiv,elementUi的css
 * 并且挂载到vue实例
 */
import 'N3-components/dist/index.min.css'
import 'keen-ui/dist/keen-ui.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import KeenUI from 'keen-ui';
import * as uiv from 'uiv'
Vue.use(KeenUI);
Vue.use(uiv, {prefix: 'uiv'});
Vue.use(ElementUI)

Vue.config.productionTip = false;

import router from './router/index'




new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  //render : (h)=>h(App) 另一种渲染方式
})
