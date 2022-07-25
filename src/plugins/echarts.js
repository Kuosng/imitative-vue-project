import * as echarts from "echarts/core"; // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import { LineChart, BarChart } from "echarts/charts"; // 引入柱状图图表，图表后缀都为 Chart
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features"; // 标签自动布局，全局过渡动画等特性
import { CanvasRenderer } from "echarts/renderers"; // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  LineChart,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

export default echarts; // 需要使用到它，所以需要导出；若无需使用，则不需要导出
