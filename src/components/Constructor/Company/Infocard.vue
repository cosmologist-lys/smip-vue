<template>
  <div class="card">
    <n3-form ref="form">
      <n3-form-item  :label-col="2" label="name">
        <n3-input show-clean name="name" v-model="model.name" :rules="[{type:'required'}]" >
        </n3-input>
      </n3-form-item>
      <n3-form-item  :label-col="2" label="name">
        <n3-input show-clean name="name" v-model="model.name" :rules="[{type:'required'}]" >
        </n3-input>
      </n3-form-item>
      <n3-form-item  :label-col="2" label="name">
        <n3-input show-clean name="name" v-model="model.name" :rules="[{type:'required'}]" >
        </n3-input>
      </n3-form-item>
    </n3-form>
  </div>
</template>
<script type="text/ecmascript-6">
  import Form from 'N3-components'
  import Input from 'N3-components'
  import Icon from 'N3-components'
  const n3Form = Form.n3Form,
    n3FormItem = Form.n3FormItem,
    n3Input = Input.n3Input,
    n3Icon = Icon.n3Icon;
  export default{
    name: 'sv-infocard',
    data(){
      return {
      	model:{
      		name : 'company name'
        }
      }
    },
    components: {
      n3Form, n3FormItem, n3Input, n3Icon
    }
  }
</script>
<style scoped>
  .card{
    display: flex;
    justify-content: center;
  }
</style>
