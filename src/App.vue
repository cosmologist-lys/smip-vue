<template>
  <div id="app">
    <button @click = "clickLogin">login</button>
    <LoginV v-if="flg"></LoginV>
    <MainV v-else></MainV>
  </div>
</template>

<script type="es6">
  import LoginV from './components/Login.vue'
  import MainV from './components/Main.vue'
export default {
  name: 'app',
  computed:{
      flg(){
          return this.$store.getters.getLoginStatus
      }
  },
  methods:{
    clickLogin(){
        this.$store.dispatch('login')
    }
  },
  components :{LoginV,MainV}
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
