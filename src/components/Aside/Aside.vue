<template>
  <div class="aside-nav">
    <!--<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>基本设置</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">公司信息</template>
          <Menuitem :items="items_1"></Menuitem>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">规则设置</template>
          <el-menu-item index="1-2-1">编码规则</el-menu-item>
          <el-menu-item index="1-2-3">表具型号</el-menu-item>
          <el-menu-item index="1-2-4">卡操作类型</el-menu-item>
          <el-menu-item index="1-2-5">气费设置</el-menu-item>
          <el-menu-item index="1-2-6">阶梯收费</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>-->
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
    	console.info(this.menus instanceof Array)
    }
  }
</script>
<style scoped>
  .aside-nav{
    height: 100%;
  }
</style>
