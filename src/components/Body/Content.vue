<template>
  <div class="body-content">
    <KitBreadcrumV :items="breadTitles"></KitBreadcrumV>
    <InnerContentV :hasBorder="hasBorder">
      <slot>
        <h1>home page</h1>
      </slot>
    </InnerContentV>
  </div>
</template>
<script type="text/ecmascript-6">
  import InnerContentV from '@/components/Body/InnerContent'
  import KitBreadcrumV from '@/components/Kits/Breadcrumb'
  export default{
    name : 'body-content',
    components : {InnerContentV,KitBreadcrumV},
    props:{
    	breadTitles:{
    		type : Array,
        default : function () {
          return[
          {
            id: 1,
              text: 'text1',
            path: `/home`
          }, {
            id: 2,
              text: 'text2',
            path: `/home`
          }, {
            id: 3,
              text: 'text3',
            path: `/home`
          }
          ]
        }
      },
      hasBorder : {
    		type : Boolean,
        default : false
      }
    }

  }
</script>
<style scoped>
  .body-content{
    height: 100%;
    width: 100%;
    background: #F2F6FC;
    /*display: flex;
    flex-direction:column*/
  }
</style>
