<template>
  <div id="app">
    <LoginV v-if="flg"></LoginV>
    <MainV v-else></MainV>
  </div>
</template>

<script type="es6">
  import LoginV from './components/Login/Login.vue'
  import MainV from './components/Main/Main.vue'
  import http from './api/http'
  export default {
    name: 'app',
    computed: {
      flg(){
        console.log(this.$store.getters.getLogin)
        return !this.$store.getters.getLogin;
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
