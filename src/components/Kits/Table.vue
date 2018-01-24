<template>
  <div>
  <el-table
    :border="hasBorder"
    :data="items"
    @selection-change="checkboxFuns"
    style="width: 100%;height: 100%">
    <el-table-column v-if="hasCheckbox"
      :align="text_align"
      type="selection"
      width="55">
    </el-table-column>
    <slot name="colums">
      <div v-for="item in items"></div>
    </slot>
    <el-table-column
      label="option1.label"
      v-if="hasOption"
      :align="text_align">
      <template slot-scope="scope">
        <!--<EditDialog ref="dialog"></EditDialog>-->
        <slot name="dialog"></slot>
        <el-button
          :type="option1.type"
          :size="option1.size"
          round
          :icon="option1.icon"
          @click="EditOne(scope.$index,scope.row)">
          {{option1.title}}
        </el-button>
        <el-button
          :type="option2.type"
          :size="option2.size"
          round
          :icon="option2.icon"
          @click="DeleteOne(scope.$index,scope.row)">
          {{option2.title}}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div v-if="hasMainBtn">
    <el-button
      :type="mainBtn1.type"
      mainBtn1.shape
      :icon="mainBtn1.icon"
      @click="addOne(mainBtn1.fun)">
      {{mainBtn1.title}}
    </el-button>
    <el-button
      :type="mainBtn2.type"
      mainBtn1.shape
      :icon="mainBtn2.icon"
      @click="deleteMany(mainBtn2.fun)">
      {{mainBtn2.title}}
    </el-button>
  </div>
  </div>
</template>
<script type="text/ecmascript-6">
  //import EditDialog from './EditDialog.vue'
  export default{
    name: 'sv-table',
    components:{},
    props:{
    	hasBorder : {
    		type : Boolean,
        default : true,
      },
      items : {  //要展示的数据
    		type : Array,
        require : true
      },
      hasCheckbox : {  //是否要第一列的checkbox
    		type : Boolean,
        default : true,
      },
      hasOption : {     //  是否要操作列
        type : Boolean,
        default : false
      },
      text_align : {   //字体排列方向
    		type : String,
        default : 'center',
      },
      option1 : {  //当操作列存在时，要传入的操作对象
    		type : Object,
        require : this.hasOption
      },
      option2 : {
    		type : Object,
        require : this.hasOption
      },
      option3 : {   //同上。但是一般操作对象只有2个。大于3个默认无
    		type : Object,
        require : false
      },
      hasMainBtn : {  //是否有主操作按钮
    		type : Boolean,
        require : false
      },
      mainBtn1 : {  //操作主按钮的具体内容
    		type : Object,
        require : this.hasMainBtn
      },
      mainBtn2 : {  //操作主按钮的具体内容
        type : Object,
        require : this.hasMainBtn
      }
    },
    methods: {
      addOne(func){
      	if (!this.hasMainBtn) return
        if (!func instanceof Function){
          this.visible = true;
          this.one_row = {}
        }else{
        	return func;
        }
      },
      deleteMany(func){//删除所选
        if (!this.hasMainBtn) return;
        if (func instanceof Function){
        	return func
        }
        console.info('delete all', this.selectedArr)
        if (this.selectedArr.length > 0) {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            //todo 删除前先提交post给后台，后台返回成功之后再删除所有
            //这里还有个坑。数据比较多的时候，删除了当前页的，要重新请求数据来填充删除的数据
            let arr = this.selectedArr;
            for (let i = 0; i < arr.length; i++) {
              this.items.splice()
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
      EditOne(index,row){
      	if (this.hasOption){
          this.visible = true;
          this.one_row = row;
          //todo
          //this.$refs.dialog.initCopy(row, index);
        }
      },
      DeleteOne(index, row) {//删除一项
        if (!this.hasOption) return;
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
      changeVisible(val, index){//子组件emit触发父组件改变props隐藏dialog，并且form取消修改
        if (val && val instanceof Object) {
          this.one_row = val;
          this.tableData[index] = val
        }
        this.visible = false
      },
      checkboxFuns(val){ // checkbox的勾选放入一个arr
      	if (this.hasCheckbox){
          this.selectedArr = val;
        }
      },
    },
    data() {
      return {
        selectedArr: [],
        one_row: {},
        visible: false,
      }
    },
    mounted(){
    	console.log('mounted:',this.items)
    }
  }
</script>
<style scoped>

</style>
