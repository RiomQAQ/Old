<template>
  <div id="main" style="width100%;height:100%"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      peoplelist: [],
    };
  },
  mounted: function() {
    // this.getPeople();
    // this.setOption();
  },
  methods: {
    //   获取居住情况
    async getPeople() {
      let that = this;
      const url = that.APIurl.API.api.sector.people;
      await that.$http
        .get(url)
        .then(function(response) {
          that.peoplelist = response.data.data.peoplelist;
          that.setOption(that.peoplelist);
          that.$message.success("获取图形数据成功");
        })
        .catch(function(error) {
          //请求失败处理
          that.$message.error("获取图形数据失败");
        });
    },

    //挂载在id=main的标签上
    setOption(list) {
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      let time = list.map((i) => {
        return {
          value: i.time,
          name: i.name,
        };
      });
      //   let name = list.map((i) => {
      //     return (i = i.name);
      //   });
      myChart.setOption({
        title: {
          text: "老年公寓楼",
          //   subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "居住情况",
            type: "pie",
            radius: "50%",
            data: time,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>
