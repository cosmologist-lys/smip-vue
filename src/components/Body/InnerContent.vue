<template>
  <div class="inner-content" :class="{Border : hasBorder}">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'sv-inner-content',
    props: {
      hasBorder: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return {}
    }
  }

</script>
<style scoped>
  .inner-content {
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-top: 0.5%;
    margin-bottom: 2.5%;
    height: 95%;
    width: 95%;
  }
  .Border {
    border: solid 2px black;
  }
</style>
