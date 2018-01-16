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
