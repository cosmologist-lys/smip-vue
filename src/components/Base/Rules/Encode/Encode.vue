<template>
  <ContentV :hasBorder="true" >
    <TableV :hasMainBtn="true" :items="items" :hasIndex="true"></TableV>
  </ContentV>
</template>
<script type="text/ecmascript-6">
  import ContentV from '@/components/Body/Content'
  import TableV from './Table.vue'
  export default{
  	name : 'sv-encode',
    components:{ContentV,TableV},
    data(){
  		return {
  			items:[
          {
          	name : 'qk',
            type: 'XX编码',
            prefix : 'qk',
            length : 10,
            max : 2323
          },{
            name : 'iccard',
            type: 'ic编码',
            prefix : 'ic',
            length : 10,
            max : 2323
          },{
            name : 'resi',
            type: 'pp编码',
            prefix : 'ekk',
            length : 10,
            max : 2323
          }
        ]
      }
    }
  }
</script>
<style scoped>

</style>
