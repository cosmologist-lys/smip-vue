<template>
  <div class="outterDiv">
    <h3 >Login vue</h3>
    <div class="login-form">
      <div class="logo-div">
        <img :src="LogoImg">
      </div>
      <div class="usernameDiv">
        <h4>username</h4>
        <n3-input v-model="username" ref="input" icon="archive" placeholder="account name"></n3-input>
      </div>
      <div>
        <h4>password</h4>
        <n3-input v-model="password" ref="password" icon="archive" type="password" placeholder="password"></n3-input>
      </div>
      <div class="errTips">
        <span v-if="isErr"  class="notErr" style="color: red;">Account wrong</span>
        <span v-else class="err"></span>
      </div>
      <div class="submitBtn">
        <n3-button @click.native="login" type="primary" size="lg">submit</n3-button>
      </div>
    </div>
  </div>
</template>
<script>

  import Button from 'N3-components'
  import Input from 'N3-components'
  import LogoImg from '@/assets/img/QKROM.png'
  import cosmogImg from '@/assets/img/cosmos.jpg'
  import * as loginJs from './LoginJs'
  const n3Button = Button.n3Button,
    n3Input = Input.n3Input;
  export default{
    name: 'Login-vue',
    components: {n3Button, n3Input},
    computed:{
    	isErr(){
    		let status =  this.$store.getters.getLoginStatus;
    		if (status && typeof status === 'string'){
    			if (status === 'OK')
    				return false
          else
          	return true
        }
        return false
      }
    },
    data(){
      return {
        username: '',
        password: '',
        LogoImg: LogoImg
      }
    },
    methods: {
      login(){
        const commit = this.$store.dispatch;
        let sysuser = {
          username: this.username,
          psw: this.password,
          _token: ''
        }
        loginJs.login(sysuser,commit);
      }
    },
  }
</script>

<style>
  .outterDiv{
    margin: 0;
    padding: 0;
    height: 100%;width: 100%;
  }
  .login-form {
    margin: 0 auto;
    height: 500px;
    width: 400px;
    border: solid 0.5px cadetblue;
    border-radius: 10px;
  }
  .usernameDiv {
    margin-top: 25px;
  }
  .submitBtn {
    margin-top: 30px;
  }
  .logo-div {
    border-radius: 10px;
    background: cadetblue;
    height: 80px;
  }
  .notErr{
    text-align: center;
  }
  .errTips{
    margin-top: 20px;
    height: 25px;
  }
</style>
