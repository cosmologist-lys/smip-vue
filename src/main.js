import Vue from 'vue'
import App from './App'
import store from './store/entry'

/**
 * n3,keen-ui,uiv的css
 */
import 'N3-components/dist/index.min.css'
import 'keen-ui/dist/keen-ui.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import KeenUI from 'keen-ui';
import * as uiv from 'uiv'

//import route from './router'

Vue.use(KeenUI)
Vue.use(uiv, {prefix: 'uiv'})

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  //render : (h)=>h(App)
})
