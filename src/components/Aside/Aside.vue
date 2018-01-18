<template>
  <div class="aside-nav">
    <el-menu
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
          <el-menu-item index="1-1-1">公司名片</el-menu-item>
          <el-menu-item index="1-1-2">区域划分</el-menu-item>
          <el-menu-item index="1-1-3">片区划分</el-menu-item>
          <el-menu-item index="1-1-4">小区划分</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">规则设置</template>
          <el-menu-item index="1-2-1">编码规则</el-menu-item>
          <el-menu-item index="1-2-3">表具型号</el-menu-item>
          <el-menu-item index="1-2-4">卡操作类型</el-menu-item>
          <el-menu-item index="1-2-5">气费设置</el-menu-item>
          <el-menu-item index="1-2-6">阶梯收费</el-menu-item>
        </el-submenu>
        <!--<el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>-->
      </el-submenu>


    </el-menu>
  </div>
</template>
<script type="text/ecmascript-6">

  export default{
    name: 'sv-aside',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  .aside-nav{
    height: 100%;
  }
</style>
