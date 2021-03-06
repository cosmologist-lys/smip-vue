import axios from 'axios';
import qs from 'qs'


import api from './apis'
import $store from '@/store/entry';

axios.defaults.baseURL = api.BASE.BASEURL || 'http://localhost:3100';
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

axios.install = (Vue) => {
  Vue.prototype.$axios = axios
};

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
    msg: '网络异常,远程主机未响应'
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

function getToken() {
  const isLogin = $store.getters.getLogin || false;
  if (!isLogin) return false;
  else return $store.getters.getSesstoken;
}

function packHeader() {
  const _token = getToken() || false;
  if (_token && _token.toString().length>0){
    return {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      '_token' : _token,
      '_auth' : 0
    }
  }else return false;
}



export default {
  /**
   * 任何一个post请求header都要携带数据
   * header携带token,auth
   * @param url 请求地址
   * @param data post数据体
   * @returns {Promise.<TResult>}
   */
  post (url, data) {
    let postHeader = packHeader();
    if (!postHeader) return;
    return axios({
      method: 'post',
      url,
      //data: qs.stringify(data), //qs.stringify意思是:例如data={a:1,b:2},转化后变成 uri?a=1&&b=2
      data : data,//post用data传送数据
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
   * @param ask 包含的请求header ,或者传入true，自动组装header
   * @returns {Promise.<TResult>}
   */
  get (url, params, ask) {
    let getHeader = {};
    if (ask) getHeader = packHeader();
    if (!getHeader && ask instanceof Object){
      getHeader = {
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
