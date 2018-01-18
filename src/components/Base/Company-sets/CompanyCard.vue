<template>
  <ContentV>
    <KitBreadcrumV :items="items"></KitBreadcrumV>
    <InnerContentV>

    </InnerContentV>
  </ContentV>
</template>
<script type="text/ecmascript-6">
  import ContentV from '@/components/Body/Content'
  import KitBreadcrumV from '@/components/Kits/Breadcrumb'
  import InnerContentV from '@/components/Body/InnerContent'
  export default{
    name: 'sv-companycard',
    components: {
      ContentV, KitBreadcrumV,InnerContentV
    },
    data(){
      return {
        items: [
          {
            id: 1,
            text: 'text1',
            path: `/home`
          },
          {
            id: 2,
            text: 'text2',
            path: `/home`
          },
          {
            id: 3,
            text: 'text3',
            path: `/home`
          },
        ]
      }
    }
  }
</script>
<style scoped>
  .company-card {

  }
</style>
