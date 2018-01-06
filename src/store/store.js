import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    isLogin : false
  },
  getters:{
    getLoginStatus(state){
      return state.isLogin;
    }
  },
  mutations:{
    login(state){
      console.log('into mutations.login')
         state.isLogin = !state.isLogin;
    }
  },
  actions:{
    login({commit}){
      commit('login');
    }
  },
})
