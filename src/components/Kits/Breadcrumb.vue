<template>
  <el-breadcrumb separator="/" style="height: 30px;font-size: 18px;margin-left: 20px;margin-top: 10px">
        <el-breadcrumb-item  v-for="item in items" :key="item.id" :to="item.path">
          {{item.text}}
        </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script type="text/ecmascript-6">
  export default{
  	name : 'sv-kit-breakcrumb',
    props : {
      separator : {
      	type : String,
        default : '/'
      },
      items : {
      	type : Array,
        require : true
      }
    }
  }

</script>
<style scoped>

</style>
