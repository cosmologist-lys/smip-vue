<template>
  <div class="card">
    <el-form ref="form" :model="form" label-width="80px" label-position="right">
      <table>
        <tr>
          <td>
            <el-form-item label="公司名称" :required="true">
              <el-input v-model="form.name" placeholder="put name here"></el-input>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="公司地址" :required="true">
              <el-input v-model="form.address" placeholder="put address here"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="客服电话" :required="true">
              <el-input v-model="form.phone" placeholder="put tel number here"></el-input>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="email" >
              <el-input v-model="form.email" placeholder="put email here"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="公司官网" >
              <el-input v-model="form.website" placeholder="put website number here"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确认</el-button>
            </el-form-item>
          </td>
        </tr>
      </table>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
  	name : 'company-info-card',
    data() {
      return {
        form: {
          name: '',
          address: '',
          phone: '',
          email: '',
          website: '',
        }
      }
    },
    methods: {
      onSubmit() {
      	const form = {
      		name : this.name,
          address : this.address,
          phone : this.phone,
          email : this.email,
          website : this.website
        }
        console.log('submit!',form);
      }
    }
  }
</script>
<style scoped>
  .card{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
<!--
<el-form-item label="公司名称" :required="true">
  <el-input v-model="form.name" placeholder="put name here"></el-input>
</el-form-item>
<el-form-item label="公司地址" :required="true">
  <el-input v-model="form.address" placeholder="put address here"></el-input>
</el-form-item>
<el-form-item label="客服电话" :required="true">
  <el-input v-model="form.phone" placeholder="put tel number here"></el-input>
</el-form-item>
<el-form-item label="email" >
  <el-input v-model="form.email" placeholder="put email here"></el-input>
</el-form-item>
<el-form-item label="公司官网" >
  <el-input v-model="form.website" placeholder="put website number here"></el-input>
</el-form-item>
<el-form-item>
  <el-button type="primary" @click="onSubmit">确认</el-button>
</el-form-item>-->
