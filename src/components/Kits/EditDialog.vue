<template>
  <el-dialog :dialog="dialog"
             :title="dialog.title"
             :form="form"
             :visible.sync="visible"
             :show-close="false"
             :close-on-click-modal="false"
             :close-on-press-escape="false"
             :center="true">
    <el-form :model="form">
      <slot name="form-items"></slot>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button :type="dialog.btn1.type" @click="submitDialog">{{dialog.btn1.title}}</el-button>
      <el-button :type="dialog.btn2.type" @click="closeDialog">{{dialog.btn2.title}}</el-button>
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
        require: false,
        default:function () {
          return {
            title: '编辑详情',
            btn1: {
              type: 'primary', title: '确认'
            },
            btn2: {
              type: 'default', title: '取消'
            }
          }
        }
      }
    },
    data(){
      return {
        index: 0,
        formCopy: {},
      }
    },
    methods: {
      submitDialog(){
        console.log('dialog submit')
        this.$emit('changeVisible',this.formCopy,this.index,1)
        //todo 提交post,并且返回更新后的form this.$emit('changeVisible',this.form,this.index)
      },
      closeDialog(){
        this.$emit('changeVisible', this.formCopy, this.index,0)
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
