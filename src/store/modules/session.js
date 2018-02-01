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
 *    sessauth:auth加密方式
 *    sessuser:当前用户信息 json
 *    sesstoken:请求成功之后返回的token,之后每次请求都要携带 string
 *    islogin:是否登陆标识
 *    loginstatus:登陆之后的状态信息，用来login.vue界面提示错误 string
 * @type {{sessauth: string, sessuser: {}, sesstoken: string, isLogin: boolean, loginStatus: string}}
 */

let state = {
  comtick: 0,  //请求次数
  sessauth: 0,  //加密类型
  sessuser: {}, //身份
  sesstoken: '', //token
  isLogin: false, //登陆状态
  loginStatus: '', //登录状态的STRING OK,FORBIDDEN,404
  remote: {} //smip-mini返回的所有json
};

const getters = {
  getSessauth (state){
    return kitbox.notEmpty(state.sessauth) ?
      state.sessauth : localStore.get(key).sessauth
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
    return Object.keys((localStore.get(key))).length>0?
      localStore.get(key).isLogin : state.isLogin
  },
  getLoginStatus(state){
    return kitbox.notEmpty(state.loginStatus) ?
      state.loginStatus : localStore.get(key).loginStatus
  }
};

const mutations = {
  [types.SET_SESSION_HASH](state, sessauth, flg = false){
    if (sesshas && sesshas.length > 0) {
      if (flg)
        state.sessauth = md5.update(sessauth).digest('hex');
      else
        state.sessauth = sessauth
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
      state.comtick = obj.local.comtick;
      state.sessauth = obj.local.sessauth;
      state.sesstoken = obj.local.sesstoken;
      state.sessuser = obj.local.sessuser;
      state.isLogin = obj.local.isLogin;
      state.loginStatus = obj.local.loginStatus;
      state.remote = obj.remote || false;
      if (state.remote) {
        state.remote.response.object = {}; //清空secuserjson，因为已经有了。
      }
      localStore.set(key, state)
    }
  },
  [types.INIT_SESSION](state){
    state.comtick = 0;
    state.sessauth = 0;
    state.sesstoken = '';
    state.sessuser = {};
    state.isLogin = false;
    state.loginStatus = '';
    state.remote = {};
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
