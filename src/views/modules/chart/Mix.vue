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
        title: {
          text: "混合图表",
          textStyle: {
            fontSize: "16px",
          },
        },
        legend: {
          right: 0,
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "line",
            axis: "auto",
            snap: true,
          },
          renderMode: "html", // 浮层的渲染模式，默认以 'html 即额外的 DOM 节点展示 tooltip；
          // formatter: '{b} 的成绩是 {c}'
          formatter: function (arg) {
            return `${arg[0].name}</br>${arg[0].seriesName}：${arg[0].data[1]}</br>${arg[1].seriesName}：${arg[1].data[2]}`;
          },
        },
        dataset: {
          dimensions: ["product", "A", "B"],
          source: [
            ["2017", 78, 69],
            ["2018", 32, 89],
            ["2019", 60, 15],
            ["2020", 11, 38],
            ["2021", 31, 78],
            ["2022", 51, 18],
          ],
        },
        series: [
          {
            type: "line",
          },
          {
            type: "bar",
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
