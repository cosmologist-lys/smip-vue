import Vue from 'vue'
import App from './App'
import store from './store/entry'
import 'N3-components/dist/index.min.css'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  /*template: '<App/>',
  components: { App },*/
  render : (h)=>h(App)
})
