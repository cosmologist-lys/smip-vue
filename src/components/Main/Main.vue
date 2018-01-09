<template>
  <div>
    <h3>this is component B</h3>
    <button @click="clearStorage">clear storage</button>
  </div>
</template>
<script>
  import * as localStore from '@/handler/LocalStore.js';
  export default{
      name : 'main-vue',
    methods:{
      clearStorage(){
      	localStore.clear('sess');
      }
    }
  }
</script>
<style></style>
