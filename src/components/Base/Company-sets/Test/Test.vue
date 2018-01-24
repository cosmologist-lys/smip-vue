<template>
  <ContentV>
    <InnerContentV :hasBorder="false">
    <TableV
      :hasBorder="true"
      :items="items"
      :hasOption="false"
      :option1="option1"
      :option2="option2"
      :hasMainBtn="true"
      :hasCheckbox="true"
      :mainBtn1="mainBtn1"
      :mainBtn2="mainBtn2">
        <el-table-column
          slot="colums"
          align="center"
          prop="name"
          label="区域名字">
        </el-table-column>
        <el-table-column
          slot="colums"
          align="center"
          prop="discribe"
          label="说明">
        </el-table-column>
    </TableV>
    </InnerContentV>
  </ContentV>
</template>
<script type="text/ecmascript-6">
  import ContentV from '@/components/Body/Content'
  import KitBreadcrumV from '@/components/Kits/Breadcrumb'
  import InnerContentV from '@/components/Body/InnerContent'
  import TableV from '@/components/Kits/Table'
  //import EditDialog from '@/components/Kits/EditDialog'
  import * as tejs from './TestJs'
  export default{
    name: 'test',
    components: {ContentV, KitBreadcrumV, InnerContentV, TableV},
    data(){
      return {
        items: [],
        option1: {
          label: '操作',
          title: '修改',
          size: 'mini',
          type: 'default',
          shape: 'round',
          icon: 'el-icon-edit'
        },
        option2: {
          label: '操作',
          title: '删除',
          size: 'mini',
          type: 'danger',
          shape: 'round',
          icon: 'el-icon-close'
        },
        mainBtn1: {
        	title : '新增',
          fun : false,
          type : 'primary',
          icon : 'el-icon-circle-plus-outline'
        },
        mainBtn2: {
          title : '删除所选',
          fun : false,
          type : 'danger',
          icon : 'el-icon-close'
        }
      }
    },
    created() {
      this.items = tejs.getItems();
    }
  }
</script>
<style scoped>

</style>
