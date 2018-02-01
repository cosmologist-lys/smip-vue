<template>
  <div class="backgrndimg">
    <img :src="backimg">
    <div class="login">
      <div class="logo-div">
        <img :src="Logo">
      </div>
      <div class="usernameDiv">
        <h4>username</h4>
        <n3-input v-model="username" ref="input" icon="user" placeholder="account name"></n3-input>
      </div>
      <div>
        <h4>password</h4>
        <n3-input v-model="password" ref="password" icon="keyboard-o" type="password" placeholder="password"></n3-input>
      </div>
      <div class="errTips">
        <span v-if="isErr" class="notErr" style="color: red;">Account wrong</span>
        <span v-else class="err"></span>
      </div>
      <div class="submitBtn">
        <n3-button @click.native="login" type="primary" size="lg">submit</n3-button>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import Backimg from '@/assets/img/cosmos.jpg'
  import LOGO from '@/assets/img/QKROM.png'
  import Button from 'N3-components'
  import Input from 'N3-components'
  import * as loginJs from './LoginJs'
  const n3Button = Button.n3Button,
    n3Input = Input.n3Input;
  export default{
  	name : 'sv-login',
    data(){
  		return {
  			backimg :Backimg,
        Logo : LOGO,
        username : '',
        password: '',
      }
    },
    components:{
      n3Button,n3Input
    },
    computed: {
      isErr(){
        let status = this.$store.getters.getLoginStatus;
        console.log('loginvue:',status)
        if (status && typeof status === 'string') {
          if (status === 'OK') {
            return false
          } else {
            return true
          }
        }
        return false
      }
    },
    methods: {
      login(){
        const commit = this.$store.dispatch;
        loginJs.login({
          username: this.username,
          psw: this.password,
        }, commit);
      }
    },
  }

</script>
<style scoped>
  .backgrndimg{
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }
  .login{
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    border: solid #409EFF 2px;
    height: 50%;width: 30%;
    border-radius: 10px;
    background: whitesmoke;
  }
  .logo-div{
    border-radius: 10px;
    background: #409EFF;
    height: 80px;
  }

  .usernameDiv {
    margin-top: 25px;
  }

  .submitBtn {
    margin-top: 30px;
  }

  .notErr {
    text-align: center;
  }
</style>
