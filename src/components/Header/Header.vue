<template>
  <div id="top">
    <div class="blank">
      <div class="blank-left-img">
        <img :src="LogoImg">
      </div>
      <div class="blank-right-usertag">
        <UiSnackbar message="UiSnackbar" action="logout" actionColor="accent" transition="slide" @action-click="logout">popover
        </UiSnackbar>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import logoImg from '@/assets/img/QKROM.png'

  import {UiPopover,UiSnackbar} from 'keen-ui'

  export default{
    name : 'Header',
    data(){
    	return{
    		LogoImg : logoImg
      }
    },
    components:{
    	UiPopover,UiSnackbar
    },
    methods:{
      logout(){
    			console.log('logout')
        //TODO this place do logout actions
      }
    }
  }
</script>
<style scoped>
  .blank{
    display: flex;
    background: #409EFF;
    justify-content: space-between;
    position:fixed; z-index:999; top:0;
    padding: 0px;
    width:100%;
    height: 10%;
    margin-top: 0px;
    //border:solid;
  }
  .blank-left-img{
    margin-left: 100px;
    width: 300px;
    height: 100%;
    //border: solid steelblue;
  }
  .blank-right-usertag{
    width: 200px;
    height: 100%;
    margin-right: 130px;
    margin-top: 18px;
  }
</style>
