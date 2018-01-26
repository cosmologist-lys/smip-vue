<template>
  <ContentV>
    <TableV :items="items" :hasMainBtn="true" :hasIndex="true"></TableV>
  </ContentV>
</template>
<script type="text/ecmascript-6">
  import ContentV from '@/components/Body/Content'
  import KitBreadcrumV from '@/components/Kits/Breadcrumb'
  import InnerContentV from '@/components/Body/InnerContent'
  import TableV from '@/components/Kits/Table'
  import EditDialog from '@/components/Kits/EditDialog'
  import * as tejs from './TestJs'

  export default{
    name: 'test',
    components: {ContentV, KitBreadcrumV, InnerContentV, TableV,EditDialog},
    data(){
      return {
        items: [],
      }
    },
    created() {
      this.items = tejs.getItems();
    }
  }
</script>
<style scoped>

</style>
