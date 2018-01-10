import axios from 'axios';
import qs from 'qs'

import * as api from './apis'

axios.defaults.baseURL = api.BASEURL || 'http://localhost:3100';
axios.defaults.timeout = 5000;


axios.interceptors.request.use(
  config => {
    console.log('axios start')
    //todo : this place can do sth before axios
    return config
  },
  err => {
    return Promise.reject(err)
  }
);

axios.interceptors.response.use(
  response => {
    console.info('axios end')
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
  post (url, data, token) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),//post用data传送数据
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        '_token': token
      }
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
  get (url, params, sysuser) {
    return axios({
      method: 'get',
      url,
      params, // get用params传送url拼接的数据
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'username': sysuser.username,
        'psw': sysuser.psw,
        '_token': sysuser._token
      }
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
