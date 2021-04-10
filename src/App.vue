<template>
  <div id="app" class="fillcontain">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "./style/common";
html,
body,
#app {
  height: 100%;
}
body .el-table th.gutter {
  display: table-cell !important;
}
body .el-popper th.gutter {
  display: list-item !important;
}
body .login .el-main {
  padding: 0px !important;
}
</style>
