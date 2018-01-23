<template>
  <ContentV>
    <KitBreadcrumV :items="items"></KitBreadcrumV>
    <InnerContentV>
      <div class="top-left-query">
        <el-col :span="7">
          区域筛选&nbsp&nbsp
          <el-autocomplete
            size="medium"
            class="inline-input"
            v-model="areaname"
            :fetch-suggestions="querySearch"
            placeholder="请输入小区名"
            @select="handleSelect">
            <i
              class="el-icon-close"
              slot="suffix"
              @click="handleIconClick">
            </i>
          </el-autocomplete>
        </el-col>
      </div>
      <el-table
        :border="true"
        height="100%"
        :data="commsData"
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
          label="小区名称">
        </el-table-column>
        <el-table-column
          align="center"
          prop="address"
          label="小区地址">
        </el-table-column>
        <el-table-column
          align="center"
          prop="chargeman"
          label="小区负责人信息">
        </el-table-column>
        <el-table-column
          align="center"
          prop="note"
          label="备注">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <CommDialog :form="form_row"
                        :visible='visible'
                        @changeVisible="changeVisible"
                        ref="comm_dialog"></CommDialog>
            <el-button
              type="default"
              size="mini"
              round
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              round
              icon="el-icon-close"
              @click="handleDeleteOne(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-size="3"
          layout="total, prev, pager, next, jumper"
          :total="pageTotal">
        </el-pagination>
      </div>
      <el-button
        type="primary" round
        icon="el-icon-circle-plus-outline"
        @click="handleAdd()">新增
      </el-button>
      <el-button
        type="danger" round
        icon="el-icon-close"
        @click="handleDeleteSelected()">删除所选
      </el-button>


    </InnerContentV>
  </ContentV>
</template>
<script type="text/ecmascript-6">
  import ContentV from '@/components/Body/Content'
  import KitBreadcrumV from '@/components/Kits/Breadcrumb'
  import InnerContentV from '@/components/Body/InnerContent'
  import CommDialog from './CommunityDialog.vue'

  import * as commJs from './CommunityJs'

  export default{
    name: 'sv-community',
    components: {ContentV, KitBreadcrumV, InnerContentV,CommDialog},
    data(){
      return {
        restaurants: [],
        areaname: '',
        items:[],
        commsData : [],
        form_row: {},
        visible: false,
        pageTotal : 0,
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        this.areaname = '';
        //ev获取鼠标信息
      },
      handleAdd(){//新增
        this.visible = true;
        this.form_row = {}
      },
      handleDeleteSelected(){//删除所选
        console.info('delete all', this.selectedArr)
        if (this.selectedArr.length > 0) {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            //todo 删除前先提交post给后台，后台返回成功之后再删除所有
            let arr = this.selectedArr;
            for (let i = 0; i < arr.length; i++) {
              this.commsData.splice(i, 1)
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
        //this.selectedArr = []
      },
      handleEdit(index, row) {//编辑一项
        this.visible = true;
        this.form_row = row;
        this.$refs.comm_dialog.initCopy(row, index);
      },
      handleDeleteOne(index, row) {//删除一项
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //todo 删除要先提交post给后台，后台返回删除成功之后再删除
          this.commsData.splice(index, 1)
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
      changeVisible(val, index){//子组件emit触发父组件改变props隐藏dialog，并且form取消修改
        if (val && val instanceof Object) {
          this.form_row = val;
          this.commsData[index] = val
        }
        this.visible = false
      },
      udpateSelections(val){
        this.selectedArr = val;
      },
      handleCurrentChange(val) {
      	//todo 这里做翻页。关联commsData数组
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {
      this.restaurants = commJs.loadData();
      this.items = commJs.loadItems();
      this.commsData = commJs.loadcommsData();
      this.pageTotal = this.commsData.length
    }
  }
</script>
<style scoped>
  .top-left-query {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-size: medium;
  }
  li {
    line-height: normal;
    padding: 7px;
  }
  .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .addr {
    font-size: 12px;
    color: #b4b4b4;
  }
  .highlighted .addr {
    color: #ddd;
  }
  .block{
    display: flex;
    justify-content: flex-end;
  }
</style>
