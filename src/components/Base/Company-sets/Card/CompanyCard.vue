<template>
  <ContentV>
      <div class="company-card-content">
        <el-form ref="companyform" :model="companyform" label-width="100px" labelPosition="left">
          <el-form-item label="公司名称" prop="name">
            <el-input v-model="companyform.name"></el-input>
          </el-form-item>
          <el-form-item label="公司地址" prop="address">
            <el-input v-model="companyform.address"></el-input>
          </el-form-item>
          <el-form-item label="客服电话" prop="tel">
            <el-input v-model="companyform.tel"></el-input>
          </el-form-item>
          <el-form-item label="公司网址" prop="website">
            <el-input v-model="companyform.website"></el-input>
          </el-form-item>
          <el-form-item label="email" prop="email">
            <el-input type="email" v-model.email="companyform.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button @click="reset('companyform')">清空</el-button>
          </el-form-item>
        </el-form>
      </div>
  </ContentV>
</template>
<script type="text/ecmascript-6">
  import ContentV from '@/components/Body/Content'
  export default{
    name: 'sv-companycard',
    components: {
      ContentV
    },
    data(){
      return {
        companyform: {
          name: '',
          address: '',
          tel: '',
          email: '',
          website: ''
        },
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
    },
    methods: {
      onSubmit() {
        console.log('submit!',this.form);
      },
      reset(formname){
        this.$refs[formname].resetFields();
      }
    },
    created(){
      //todo 创建的时候从后台获取数据并且渲染到this.companyform
    },

    beforeDestory(){
      //todo 销毁动作
    },
  }
</script>
<style scoped>
  .company-card-content {
    margin-top: 50px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
