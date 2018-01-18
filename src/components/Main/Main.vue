<template>
  <div>
    <HeaderV></HeaderV>
    <NavierV></NavierV>
    <BodyV></BodyV>
  </div>
</template>
<script>
  import * as localStore from '@/handler/LocalStore.js';

  import HeaderV from '../Header/Header.vue';
  import NavierV from '../Navier/Navier.vue';
  import FooterV from '../Footer/Footer.vue';
  import BodyV from '../Body/Body.vue';


  export default{
    name: 'main-vue',
    methods: {

    },
    components: {
      HeaderV, NavierV,FooterV,BodyV
    }
  }
</script>
<style></style>
