<template>
  <div>
    <div id="sv-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped>
  #sv-body {
    margin-top: 140px; /*header,navier是Z轴999，拉开距离*/
    /*height: 80%;*/
    height: 600px;;
    width: 100%;
    background: rgb(250,250,250);
    //border: solid red;
  }
</style>
