<template>
  <div class="body-content">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name : 'body-content'
  }
</script>
<style scoped>
  .body-content{
    height: 100%;
    width: 100%;
    background: #F2F6FC;
    /*display: flex;
    flex-direction:column*/
  }
</style>
