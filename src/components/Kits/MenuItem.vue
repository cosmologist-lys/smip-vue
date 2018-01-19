<template>
    <div>
      <router-link  v-for="item in items" :key="item.id" :to="item.path">
        <el-menu-item :index="item.index">
        {{item.title}}
        </el-menu-item>
      </router-link>
    </div>
</template>
<script type="text/ecmascript-6">
  export default{
  	name : 'sv-kit-menuitem',
    props : {
      items : {
        type : Array,
        require : true
      }
    }
  }

</script>
<style scoped>

</style>
