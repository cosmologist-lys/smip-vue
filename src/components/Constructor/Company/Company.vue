<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div class="edit-body">
            <div class="info-content">
              <el-tabs :tab-position="tabPosition" style="height: 100%; width:100%;margin-top: 5%;margin-right: 20%">
                <el-tab-pane label="company edit"><Infocard></Infocard></el-tab-pane>
                <el-tab-pane label="rules edit"><CoderulesCard></CoderulesCard></el-tab-pane>
                <el-tab-pane label="other edit"></el-tab-pane>
                <el-tab-pane label="price edit"></el-tab-pane>
              </el-tabs>

            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  import Infocard from '@/components/Constructor/Company/Infocard'
  import CoderulesCard from '@/components/Constructor/Company/CoderulesCard'

  export default{
    name: 'sv-company',
    data(){
    	return {
        tabPosition: 'left'
        }
      },
    components :{Infocard,CoderulesCard}
  }
</script>
<style>
  .edit-body{
    position: fixed;
    top: 55%;
    left: 50%;
    width:70%;
    height: 60%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    border: solid 1px #409EFF;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 20px;
  }
  .info-content{
    height:90%;
    width:90%;
  }
</style>

<!--
<template>
  <div>
    <div id="sv-company">
      <div class="left-company-info">
        <cardV></cardV>
      </div>
      <div class="mid-seperate-line"></div>
      <div class="right-rules-sets"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import cardV from '@/components/Constructor/Company/Infocard'
  export default{
    name: 'sv-company',
    components:{
      cardV
    }
  }
</script>
<style scoped>
  #sv-company {
    top: 70px;
    display: flex;
    justify-content: space-around;
    position: relative;
    border: 1px solid black;
  }

  .left-company-info {
    border: solid 1px darkred;
    height: 400px;
    width: 40%;
  }

  .right-rules-sets {
    border: solid 1px blue;
    height: 400px;
    width: 40%;
  }

  .mid-seperate-line {
    height: 400px;
    width: 1.5px;
    border: solid 1px darkgrey;
  }
</style>
-->
