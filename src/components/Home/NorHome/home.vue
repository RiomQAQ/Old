<template style="height:100%">
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="230px">
        <Aside :list="list" />
      </el-aside>
      <el-main style="height:700px;">
        <!-- <PeopleManager /> -->
        <router-view></router-view>
        <!-- <router-link to="/home/old">111</router-link> -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from "./Aside";
import Header from "./Header";
import * as echarts from "echarts";
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    Header,
    Aside,
  },
  mounted: function() {
    this.list = this.Pathuser;
    // this.getPeople();
    // this.setOption();
  },
  methods: {
    // async getPeople() {
    //   let that = this;
    //   const url = that.APIurl.API.api.sector.people;
    //   await that.$http
    //     .get(url)
    //     .then(function(response) {})
    //     .catch(function(error) {
    //       //请求失败处理
    //       that.$message.error("编辑失败");
    //     });
    // },
    // setOption() {
    //   var myChart = echarts.init(document.getElementById("main"));
    //   // 绘制图表
    //   myChart.setOption({
    //     title: {
    //       text: "ECharts 入门示例",
    //     },
    //     tooltip: {},
    //     xAxis: {
    //       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: "销量",
    //         type: "bar",
    //         data: [5, 20, 36, 10, 10, 20],
    //       },
    //     ],
    //   });
    // },
  },
};
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  /* background-color: #F5F5F5; */
}
/* #background {
  background: url(../../../pic/p1.jpg) no-repeat;
  background-size: 100% 100%;
} */

.el-header {
  /* background-color: #b3c0d1; */
  /* line-height: 200px; */
  /* color: #333; */
  line-height: 60px;
  border-width: 1px;
  border-color: rgb(194, 194, 194);
  border-bottom-style: solid;
}

.el-aside {
  /* background-color: #d3dce6; */
  /* color: #333; */
  text-align: center;
  /* line-height: 200px; */
  height: 100%;
  width: 150px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  /* margin-bottom: 40px; */
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
