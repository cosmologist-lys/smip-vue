<template>
  <ContentV>
    <KitBreadcrumV :items="items"></KitBreadcrumV>
    <InnerContentV :hasBorder="false">
      <el-table
        :border="true"
        height="100%"
        :data="tableData"
        @selection-change="udpateSelections"
        style="width: 100%">
        <el-table-column
          align="center"
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="区域名字">
        </el-table-column>
        <el-table-column
          align="center"
          prop="discribe"
          label="区域详情">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <AreaDialog :form="form_row"
                        :visible='visible'
                        @changeVisible="changeVisible"></AreaDialog>
            <el-button
              type="default"
              size="mini"
              round
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              round
              @click="handleDeleteOne(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button
        type="primary" round
        @click="handleAdd()">新增
      </el-button>
      <el-button
        type="danger" round
        @click="handleDeleteSelected()">删除所选
      </el-button>
    </InnerContentV>
  </ContentV>
</template>
<script type="text/ecmascript-6">
  import ContentV from '@/components/Body/Content'
  import KitBreadcrumV from '@/components/Kits/Breadcrumb'
  import InnerContentV from '@/components/Body/InnerContent'

  import AreaDialog from './AreaDialog.vue'
  export default{
    name: 'sv-area',
    components: {ContentV, KitBreadcrumV, InnerContentV, AreaDialog},
    methods: {
      handleAdd(){//新增
        this.visible = true;
        this.form_row = {}
      },
      handleDeleteSelected(){//删除所选
        console.info('delete all', this.selectedArr)
        if (this.selectedArr.length > 0){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            //todo 删除前先提交post给后台，后台返回成功之后再删除所有
            let arr = this.selectedArr;
            for (let i = 0; i < arr.length; i++) {
              this.tableData.splice(i, 1)
            }
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      },
      handleEdit(index, row) {//编辑一项
        this.visible = true;
        this.form_row = row;
        console.log(index, this.visible);
      },
      handleDeleteOne(index, row) {//删除一项
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //todo 删除要先提交post给后台，后台返回删除成功之后再删除
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      changeVisible(flg){//子组件emit触发父组件改变props
        this.visible = flg
      },
      udpateSelections(val){
        this.selectedArr = val;
      }
    },
    data() {
      return {
        selectedArr: [],
        form_row: {},
        visible: false,
        tableData: [{
          id: 1,
          name: '区域aaaa',
          discribe: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          name: '区域32423',
          discribe: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          name: '区域bbb',
          discribe: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 4,
          name: '区域ccc',
          discribe: '上海市普陀区金沙江路 1516 弄'
        }, {
          id: 5,
          name: '区域ddd',
          discribe: '上海市普陀区金沙江路 1516 弄'
        }, {
          id: 6,
          name: '区域eee',
          discribe: '上海市普陀区金沙江路 1516 弄'
        }],
        items: [
          {
            id: 1,
            text: 'text1',
            path: `/home`
          },
          {
            id: 5,
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
</style>
