<template>
  <div class="aside-nav">
    <MenuV :menus="menus"></MenuV>
  </div>
</template>
<script type="text/ecmascript-6">
  import MenuV from '@/components/Kits/Menu'
  import menu from '@/menu/primary/primary'
  export default{
    name: 'sv-aside',
    data(){
    	return {
    		menus : menu
      }
    },
    components : {MenuV},
    created(){

    }
  }
</script>
<style scoped>
  .aside-nav{
    height: 100%;
  }
</style>
