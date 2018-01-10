/**
 * window.localstorage做状态缓存，关联vuex
 * @type {Storage}
 */

const localStorage = window.localStorage || localStorage;

export const set = (key, item) => {
  if (item && typeof item === 'object') {
    localStorage.setItem(key, JSON.stringify(item));
  }
};

export const get = (key) => {
  if (key && typeof key === 'string') {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
};

export const clear = (key, commit) => {
  if (key && typeof key === 'string') {
    if (key === 'sess') {
      //如果是清除sess，则同步更新vuex.action.initsessions,触发全局监听
      commit('initSessions')
    }
    return localStorage.removeItem(key)
  }
};

export const clearAll = (commit) => {
  //todo 该项需要同步更新所有vuex挂载的状态。触发所有监听。用循环实现。到时候再说
  return localStorage.clear()
};
