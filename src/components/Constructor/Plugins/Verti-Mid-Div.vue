<template>
    <div>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div class="sv-verti-mid-div"></div>
        </div>
      </el-col>
    </div>
</template>
<script type="text/ecmascript-6">
  export default{
  	name : 'sv-verti-mid-div',
    //props:['top','left','width','height','border']
  }
</script>
<style scoped>
  .sv-verti-mid-div{
    position: fixed;
    top: 55%;
    left: 50%;
    width:70%;
    height: 60%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    border: solid 1px black;
  }
</style>
