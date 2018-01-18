<template>
  <div class="header-blank">
    <div class="head-left-logo">
      <img :src="logoImg">
    </div>
    <div class="head-right-icon">
      <el-dropdown split-button type="default">
        <n3-icon type="user">&nbsp</n3-icon>username
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item debided><span @click="logout">Logout</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import LOGO from '@/assets/img/QKROM.png'
  import Icon from 'N3-components'
  const n3Icon = Icon.n3Icon
  export default{
    name: 'sv-header',
    data(){
      return {
        logoImg: LOGO
      }
    },
    components: {n3Icon},
    methods: {
      logout(){
      	//TODO
        console.log('logout')
      },
    }
  }
</script>
<style scoped>
  .header-blank {
    display: flex;
    justify-content: space-between;
  }

  .head-left-logo {
    margin-left: -10px;
  }

  .head-right-icon {
    height: 39px;
    width: 250px;
    margin-top: 1%;
  }

  img {
    vertical-align: top;
    margin-left: 30px;
  }

  .el-dropdown {
    vertical-align: top;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
