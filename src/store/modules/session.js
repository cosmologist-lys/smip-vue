/**
 * session.vuex
 * 状态相关
 **/


const md5 = require('crypto').createHash('md5');
import * as types from '../mutation-types';

const state = {
  sesshash: '',
  sessuser: {},
  sesstoken: '',
  isLogin: false
};

const getters = {
  getSesshas (state){
    return state.sesshash
  },
  getSessuser(state){
    return state.sessuser;
  },
  getSesstoken(state){
    return state.sesstoken
  },
  getLogin(state){
    return state.isLogin
  }
};

const mutations = {
  [types.SET_SESSION_HASH](state, sesshas, flg){
    if (sesshas && sesshas.length > 0) {
      if (flg)
        state.sesshash = md5.update(sesshas).digest('hex');
      else
        state.sesshash = sesshas
    }
  },
  [types.SET_SESSION_USER] (state, sysuser){
    if (sysuer && JSON.stringify(sysuser).length > 0) {
      if (typeof sysuser === 'object')
        state.sessuser = sysuser
    }
  },
  [types.SET_SESSION_TOKEN](state, token){
    if (token && token.toString().length > 0) {
      state.sesstoken = token;
    }
  },
  [types.SET_SESSION](state, obj){
    if (obj && JSON.stringify(obj).length > 0) {
      state.sesshash = obj.sesshash;
      state.sesstoken = obj.sesstoken;
      state.sessuser = obj.sessuser;
      state.isLogin = obj.isLogin;
    }
  },
  [types.SET_SESSION_LOGINSTATUS](state, judge){
    state.isLogin = judge
  }
};

const actions = {
  setSesshas ({commit}, value){
    commit(types.SET_SESSION_HASH, value)
  },
  setSessuser({commit}, value){
    commit(types.SET_SESSION_USER, value)
  },
  setSesstoken({commit}, value){
    commit(types.SET_SESSION_TOKEN, value)
  },
  setLoginStatus({commit}, value){
    commit(types.SET_SESSION_LOGINSTATUS, value)
  },
  loginApi(obj){
    return true
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
