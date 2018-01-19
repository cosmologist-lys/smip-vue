<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true">
      <el-submenu v-for="primary in menus" :key="primary.id" :index="primary.index">
        <template slot="title">
          <i :class="primary.icon"></i>
          <span>{{primary.title}}</span>
        </template>
        <el-submenu v-for="secondary in primary.items" :key="secondary.id" :index="secondary.index">
          <template slot="title">{{secondary.title}}</template>
          <router-link v-for="tietiary in secondary.items"
                       :key="tietiary.id" :to="tietiary.path"
                       @hover="changeColor">
            <el-menu-item :index="tietiary.index">
              {{tietiary.title}}
            </el-menu-item>
          </router-link>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'sv-kit-menu',
    props: {
      menus: {
        type: Array,
        require: true
      },
    },
    components: {},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeColor(){
        console.info('mouse enter')
      }
    },
    created(){
    },
  }
</script>
<style scoped>

</style>
