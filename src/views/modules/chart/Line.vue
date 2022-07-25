<template>
  <div
    class="echart"
    id="mychart"
    :style="{ float: 'left', width: '100%', height: '400px' }"
  ></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const option = {
        legend: {
          right: 0,
        },
        tooltip: {},
        dataset: {
          dimensions: ["product", "A", "B", "C"],
          source: [
            ["2017", 78, 69, 45],
            ["2018", 32, 89, 12],
            ["2019", 51, 15, 52],
            ["2020", 51, 38, 12],
            ["2021", 51, 78, 32],
            ["2022", 51, 18, 62],
          ],
        },
        series: [
          {
            type: "line",
            smooth: true,
          },
          {
            type: "line",
            smooth: true,
          },
          {
            type: "line",
            smooth: true,
          },
        ],
        xAxis: { type: "category" },
        yAxis: {},
      };

      const myChart = this.$echarts.init(document.getElementById("mychart")); // 挂载 echarts 实列
      myChart.setOption(option); // 根据数据渲染页面
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
};
</script>
