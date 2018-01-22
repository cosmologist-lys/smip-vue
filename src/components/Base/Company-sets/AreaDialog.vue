<template>
  <el-dialog title="区域划分-详细设置"
             :form="form"
             :visible.sync="visible"
             :show-close="false"
             :close-on-click-modal="false"
             :close-on-press-escape="false"
             :center="true">
    <el-form :model="form">
      <el-form-item label="区域名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="区域说明" :label-width="formLabelWidth">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="form.discribe">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitDialog">确 定</el-button>
      <el-button @click="closeDialog">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'sv-area-dialog',
    props: {
      form: {
        type: Object,
        require: true
      },
      visible: {
        type: Boolean,
        default: false,
        require: true
      }
    },
    data(){
      return {
        formLabelWidth: '120px'
      }
    },
    methods: {
      submitDialog(){
        console.log('dialog submit')
        //todo 提交post
      },
      closeDialog(){
        this.$emit('changeVisible', false)
      }
    }
  }

</script>
<style scoped>

</style>
