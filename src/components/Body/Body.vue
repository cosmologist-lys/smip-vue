<template>
  <div>
    <div class="body-top-blank"></div>
    <div class="sv-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped>
  .body-top-blank{
    height: 80px;
    margin:0; padding: 0;
    border: solid black;
  }
  .sv-body {
    height: 85%;
    width: 100%;
    background: rgb(250,250,250);
    border: solid red;
    position: fixed;
  }
</style>
