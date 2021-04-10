<template>
  <el-row>
    <el-col :span="4">
      <h2 id="header">老年公寓管理系统</h2>
    </el-col>
    <el-col :span="1" :offset="19"
      ><el-button type="text" @click="Exit">退出</el-button></el-col
    >
  </el-row>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    Exit() {
      sessionStorage.clear();
      this.$router.push({ path: "/" });
      this.$message.success("退出成功");
    },
  },
};
</script>
<style>
#header {
  /* display: inline-block;
  width: 200px;
  position: relative; */
  transform: translateX(3%);
}
</style>
