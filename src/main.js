// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./plugins/element.js"; // 按需引入 element
import echarts from "./plugins/echarts.js"; // 按需引入 echarts
import "@/assets/tailwindcss.css";

// 挂载 vue 原型中
Vue.prototype.$echarts = echarts; // 书写习惯，vue 原型属性带$

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
