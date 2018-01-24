<!--
<template>
  <el-dialog :title="dialog.title"
             :form="form"
             :visible.sync="visible"
             :show-close="false"
             :close-on-click-modal="false"
             :close-on-press-escape="false"
             :center="dialog.isCenter">
    <el-form :model="form">
      <div v-for="(v,k,index) of form">
        <el-form-item :label="k">
          <el-input v-model="v"
                    auto-complete="off"
                    :type="v.length>100 ? textarea : input"
                    :rows="v.length>100 ? 3 : 1"
                    :placeholder="k">
          </el-input>
        </el-form-item>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitDialog">确 定</el-button>
      <el-button @click="closeDialog">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script type="text/ecmascript-6">
  import * as kits from '@/handler/kitbox.js'

  export default{
    name: 'sv-edit-dialog',
    props: {
      form: {
        type: Object,
        require: true
      },
      visible: {
        type: Boolean,
        default: false,
        require: true
      },
      dialog: {
        type: Object,
        require: true
      }
    },
    data(){
      return {
        index: 0,
        formCopy: {},
        formLabelWidth: '120px'
      }
    },
    methods: {
      submitDialog(){
        console.log('dialog submit')
        //todo 提交post,并且返回更新后的form this.$emit('changeVisible',this.form,this.index)
      },
      closeDialog(){
        this.$emit('changeVisible', this.formCopy, this.index)
      },
      initCopy(val, index){
        this.index = index;
        this.formCopy = kits.deepCopy(val)
      },
    },

  }

</script>
<style scoped>

</style>
-->
