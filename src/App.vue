<template>
  <div id="app">
    <button @click="clickLogin">login</button>
    <LoginV v-if="flg"></LoginV>
    <MainV v-else></MainV>
  </div>
</template>

<script type="es6">
  import LoginV from './components/Login/Login.vue'
  import MainV from './components/Main/Main.vue'
  export default {
    name: 'app',
    computed: {
      flg(){
        console.log(this.$store.getters.getLogin)
        return !this.$store.getters.getLogin;
      }
    },
    methods: {
      clickLogin(){
        const commit = this.$store.dispatch;
        const sysuser = {
          username : 'admin',
          psw : '666666'
        };
        const respdata = this.$http.get('/users/login', null, sysuser, null);
        console.log(respdata)
        /*commit('loginApi')
          .then(flg => {
            commit('setLoginStatus', flg)
          })*/
      }
    },
    components: {LoginV, MainV}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
