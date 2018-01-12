<template>
  <div>
  <div class="sv-navier">
    <n3-nav theme="light" :uniqueOpened="uniqueOpenedFlg" menu-trigger="hover"
            style="width: 100%;background: whitesmoke"
            mode="horizontal">
      <n3-sub-nav index="1">
        <template slot="title"><n3-icon type="asterisk"/>sub nav 1</template>
        <n3-nav-item index="1-1"><n3-icon type="asterisk"/>1-1</n3-nav-item>
        <n3-nav-item index="1-2"><n3-icon type="asterisk"/>1-3</n3-nav-item>
        <n3-nav-item index="1-3"><n3-icon type="asterisk"/>1-4</n3-nav-item>
      </n3-sub-nav>

      <n3-sub-nav index="2">
        <template slot="title">Nav two</template>
        <n3-nav-item index="2-1">Item one</n3-nav-item>
        <n3-nav-item index="2-2">Item two</n3-nav-item>
        <n3-nav-item index="2-3">Item three</n3-nav-item>
      </n3-sub-nav>
    </n3-nav>
  </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Nav from 'N3-components'
  import Icon from 'N3-components'
  const n3Nav = Nav.n3Nav,
    n3NavGroup = Nav.n3NavGroup,
    n3NavItem = Nav.n3NavItem,
    n3SubNav = Nav.n3SubNav,
    n3Icon = Icon.n3Icon;
  export default{
    name: 'navier',
    data(){
      return {
        uniqueOpenedFlg: true
      }
    },
    components: {
      n3Nav, n3NavGroup, n3NavItem, n3SubNav,n3Icon
    }
  }
</script>
<style scoped>
  .sv-navier {
    margin-top: 18px;
    position: fixed;
    z-index: 998;
    width: 100%;
    margin-left: 0px;
    //border: solid red;
  }

</style>
