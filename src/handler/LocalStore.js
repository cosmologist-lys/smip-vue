


/**
 * window.localstorage做状态缓存，关联vuex
 * @type {Storage}
 */



const localStorage = window.localStorage;

export const set = function (key,item) {
  if (item && typeof item === 'object') {
    localStorage.setItem(key,JSON.stringify(item));
  }
};

export const get = function (key) {
  if (key && typeof key === 'string') {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
};

export const clear = function (key) {
  if(key && typeof key === 'string'){
    return localStorage.removeItem(key)
  }
};

export const clearAll = function () {
  return localStorage.clear()
};
