import http from '@/api/http';
const api = require('@/api/apis')

export const login = (user, commit) => {
  if (user) {
    http.get(api.LOGIN, null, user)
      .then(data => {
        const userinfo = {
          sysuser: data.targets,
          status: data.httpStatus,
          token: data.info.tokenPsw
        }
        return userinfo
      }).then(data => {
      const flg = valid(data)
      if (flg) {
        //登陆成功
        const validUser = {
          sesshash: '',
          sesstoken: data.token,
          sessuser: data.sysuser,
          isLogin: true,
          loginStatus: data.status
        }
        console.info(validUser)
        commit('loginApi', validUser);
      } else {
        //登陆失败
        const validUser = {
          sesshash: '',
          sesstoken: '',
          sessuser: null,
          isLogin: false,
          loginStatus: data.status
        }
        console.info(validUser);
        commit('loginApi', validUser)
      }
    })
  }
}

export const valid = (info) => {
  if (info) {
    const token = info.token;
    if (token && typeof token === 'string') {
      return true
    }
  }
  return false
}
