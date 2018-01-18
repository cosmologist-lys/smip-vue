<template>
  <el-container>
    <el-header height="80px"><HeadV></HeadV></el-header>
    <el-container>
      <el-aside><AsideV></AsideV></el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>
<script type="text/ecmascript-6">
  import BodyV from '@/components/Body/Body'
  import FootV from '@/components/Footer/Footer'
  import HeadV from '@/components/Header/Header'
  import AsideV from '@/components/Aside/Aside'
  export default{
    name: 'sv-home',
    components: {
      BodyV, FootV, HeadV, AsideV
    }
  }

</script>
<style>
  .el-header{
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;

  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;

  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    width: 300px;
    height: 900px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
