<template>
  <div>
    <h3>Login vue</h3>
    <form class="login-form">
      <div class="usernameDiv">
        <h4>username</h4>
        <n3-input v-model="username" ref="input" icon="archive" placeholder="account name"></n3-input>
      </div>
      <div >
        <h4>password</h4>
        <n3-input v-model="password" ref="password" icon="archive" type="password" placeholder="password"></n3-input>
      </div>
      <div class="submitBtn">
        <n3-button type="primary" size="lg">submit</n3-button>
      </div>
    </form>
  </div>
</template>
<script>
  import Button from 'N3-components'
  import Input from 'N3-components'
  const n3Button = Button.n3Button,
    n3Input = Input.n3Input;
export default{
    name : 'Login-vue',
  components:{n3Button,n3Input},
  data(){
    return{
        username: '',
      password: ''
    }
  }
}
</script>

<style>
  .login-form{
    margin:0 auto;
    height: 400px;
    width: 500px;
    border:solid  0.5px cadetblue;
  }
  .usernameDiv{
    margin-top: 85px;
  }
  .submitBtn{
    margin-top: 50px;
  }
</style>
