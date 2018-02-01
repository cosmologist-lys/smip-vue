import axios from 'axios';
import qs from 'qs'

import * as api from './apis'

axios.defaults.baseURL = api.BASEURL || 'http://localhost:3100';
axios.defaults.timeout = 5000;


axios.interceptors.request.use(
  config => {
    //console.log('axios start')
    //todo : this place can do sth before axios
    return config
  },
  err => {
    return Promise.reject(err)
  }
);

axios.interceptors.response.use(
  response => {
    //console.info('axios end')
    //todo : this place can do sth after axios
    return response
  },
  err => {
    return Promise.resolve(err.response)
  });

function checkStatus(response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
  }
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  if (res.status === -404) {
    alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    alert(res.data.error_msg)
  }
  return res
}

export default {
  /**
   * 任何一个post请求header都要携带数据
   * header携带token,auth
   * @param url 请求地址
   * @param data post数据体
   * @param token
   * @returns {Promise.<TResult>}
   */
  post (url, data, header) {
    let postHeader = {};
    if (header._token){
      postHeader = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'Content-Type',
        '_token' : header._token || header.token,
        '_auth' : header._auth || header.auth
      }
    }else{
      return;
    }
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),//post用data传送数据
      headers: postHeader
    }).then(
      response => {
        return checkStatus(response)
      }
    ).then(
      response => {
        return checkCode(response)
      }
    )
  },
  /**
   * 任何一个get请求header都要携带数据
   * login时，header携带username,psw,auth
   * conns时，header携带token,auth
   * @param url 请求地址
   * @param params url参数 例：ip:port/find?id=1
   * @param ask 包含的请求header
   * @returns {Promise.<TResult>}
   */
  get (url, params, ask) {
    let getHeader = {}
    if (ask._token){ //有token的时候不是登陆操作
      getHeader = {
        'X-Requested-With': 'XMLHttpRequest',
        '_token' : ask._token,
        '_auth' : ask._auth
      }
    }else{
      getHeader = {  //无token的时候只能是登陆操作
        'X-Requested-With': 'XMLHttpRequest',
        'username': ask.username,
        'psw': ask.psw,
        '_auth' : ask._auth
      }
    }
    return axios({
      method: 'get',
      url,
      params, // get用params传送url拼接的数据
      headers: getHeader
    }).then(
      response => {
        return checkStatus(response)
      }
    ).then(
      response => {
        return checkCode(response)
      }
    )
  }
}
