<template>
  <div>
    <HeaderV></HeaderV>
    <NavierV></NavierV>
    <router-view></router-view>
    <button @click="clearStorage">clear storage</button>
    <FooterV></FooterV>
  </div>
</template>
<script>
  import * as localStore from '@/handler/LocalStore.js';

  import HeaderV from '../Header/Header.vue';
  import NavierV from '../Navier/Navier.vue';
  import FooterV from '../Footer/Footer.vue';

  export default{
    name: 'main-vue',
    methods: {
      clearStorage(){
        const commit = this.$store.dispatch;
        localStore.clear('sess', commit);
      }
    },
    components: {
      HeaderV, NavierV,FooterV
    }
  }
</script>
<style></style>
