/**
 * session.vuex
 * 状态相关
 * 用localstorage存储
 **/


const md5 = require('crypto').createHash('md5');
import * as types from '../mutation-types';
import * as localStore from '@/handler/LocalStore.js';
import * as kitbox from '@/handler/kitbox.js';
const key = 'sess';

/**
 * session.state构成：
 *    sesshash:sessionid 的哈希值 string
 *    sessuser:当前用户信息 json
 *    sesstoken:请求成功之后返回的token,之后每次请求都要携带 string
 *    islogin:是否登陆标识
 *    loginstatus:登陆之后的状态信息，用来login.vue界面提示错误 string
 * @type {{sesshash: string, sessuser: {}, sesstoken: string, isLogin: boolean, loginStatus: string}}
 */

const state = {
  sesshash: '',
  sessuser: {},
  sesstoken: '',
  isLogin: false,
  loginStatus: ''
};

const getters = {
  getSesshas (state){
    return kitbox.notEmpty(state.sesshash) ?
      state.sesshash : localStore.get(key).sesshash

  },
  getSessuser(state){
    return kitbox.notEmpty(state.sessuser) ?
      state.sessuser : localStore.get(key).sessuser
  },
  getSesstoken(state){
    return kitbox.notEmpty(state.sesstoken) ?
      state.sesstoken : localStore.get(key).sesstoken
  },
  getLogin(state){
    return kitbox.notEmpty(localStore.get(key))?
      localStore.get(key).isLogin : state.isLogin
  },
  getLoginStatus(state){
    return kitbox.notEmpty(state.loginStatus) ?
      state.loginStatus : localStore.get(key).loginStatus
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
      state.loginStatus = obj.loginStatus;
      localStore.set(key, state)
    }
  },
  [types.INIT_SESSION](state){
    state.sesshash = ''
    state.sesstoken = ''
    state.sessuser = {}
    state.isLogin = false
    state.loginStatus = ''
  },
  [types.SET_SESSION_LOGINFLAG](state, judge){
    state.isLogin = judge
  },
  [types.SET_SESSION_LOGINSTATUS](state, status){
    state.loginStatus = status.toString()
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
    commit(types.SET_SESSION_LOGINFLAG, value)
  },
  setFailLogin({commit}, status){
    commit(types.SET_SESSION_LOGINSTATUS, status)
  },
  loginApi({commit}, obj){
    commit(types.SET_SESSION, obj)
  },
  initSessions({commit}){
    commit(types.INIT_SESSION);
  }
};


export default {
  state,
  getters,
  mutations,
  actions
}
