/*let state = {
  comtick: 0,  //请求次数
  sessauth: 0,  //加密类型
  sessuser: {}, //身份
  sesstoken: '', //token
  isLogin: false, //登陆状态
  loginStatus: '', //登录状态的字符串 OK,FORBIDDEN,404
  remote: {} //smip-mini返回的所有json
};*/

const state = new Object({
  comtick : {
    type : Number,
    default : 0
  },
  auth :{
    type : String,
    default : '+_auth'
  }
});
console.log(state)
const state_copy = new state;
console.log(state_copy)
