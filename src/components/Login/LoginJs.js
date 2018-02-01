import http from '@api/http';
import api from '@api/apis.js'
import router from '@/router/index.js'

export const login = (user, commit) => {
  const $router = router;
  if (!user.psw && !user.username) return;
  if (user) {
    http.get(api.LOGIN, null, user)
      .then(data => {
        return valid(data, commit, $router);
      });
  }
};
/**
 * 验证登陆成功或失败
 * @returns {*}
 */
export const valid = (info, commit, $router) => {
  if (!info) return false;
  const status = info.status || info.response.httpStatus;
  const _token = info.keycore ? info.keycore._token || false : false;
  if (status === 'OK' && typeof _token === 'string') {
    return success(info, commit, $router);
  } else if (status === 'FORBIDDEN') {
    return forbidden(info, commit);
  } else {
    return fail(info, commit);
  }
};
/**
 * 登陆成功，httpStatus = OK 且存在 token
 * @param obj
 * @param commit
 * @param $router
 */
export const success = (obj, commit, $router) => {
  const validUser = {
    local: {
      comtick: obj.keycore._comtick,
      sessauth: obj.keycore._auth,
      sesstoken: obj.keycore._token,
      isLogin: obj.keycore._isvalid,
      loginStatus: obj.response.httpStatus,
      sessuser: obj.response.object
    },
    remote: obj
  };
  console.info('loginJs.success:', validUser);
  commit('loginApi', validUser);
  $router.push({path: '/v1.0'}); //登陆成功跳转到主页
};
/**
 * 登陆失败，500错误
 * @param obj
 * @param commit
 * @param $router
 */
export const fail = (obj, commit) => {
  const validUser = {
    local: {
      comtick: 0,
      sessauth: 0,
      sesstoken: '',
      isLogin: false,
      loginStatus: '',
      sessuser: {}
    },
    remote: false
  };
  console.info('loginJs.fail:', validUser);
  commit('loginApi', validUser)
};
/**
 * 登陆失败，forbidden，验证未通过或权限不够
 * @param obj
 * @param commit
 * @param $router
 */
export const forbidden = (obj, commit) => {
  const validUser = {
    local: {
      comtick: obj.keycore._comtick,
      sessauth: obj.keycore._auth,
      sesstoken: obj.keycore._token,
      isLogin: obj.keycore._isvalid,
      loginStatus: obj.response.httpStatus,
      sessuser: obj.response.object
    },
    remote: obj
  };
  console.info('loginJs.success:', validUser);
  commit('loginApi', validUser);
};
