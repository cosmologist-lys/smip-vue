<template>
  <div id="app">
    <keep-alive>
    <MainV v-if="flg"></MainV>
    <LoginV v-else></LoginV>
    </keep-alive>
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
        console.log('store.getters.isLogin=',this.$store.getters.getLogin)
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
/*export default {
name: 'app',
data(){
return {
showFlg: !this.$store.getters.getLogin
}
},
computed: {
flg: {
get: function () {
return (this.showFlg || false)
},
set: function (val) {
return (val || false)
}
},
},
watch: {
showFlg: {
deep: true,
handler: function (val, oldval) {
console.log('watcher:', 'val=', val, 'oldval:', oldval)
return val;
}
}
},
methods:{
change(){
this.showFlg = !this.showFlg
}
},
components: {LoginV, MainV}
}*/
