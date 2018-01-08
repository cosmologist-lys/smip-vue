import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import module_session from './modules/session';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    module_session
  },
  strict: debug,
  //plugins: debug ? [createLogger()] : []
})

