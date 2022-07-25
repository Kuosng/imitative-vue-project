import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/layout/Layout";
import table from "./table";
import chart from "./chart";

Vue.use(Router);

/*
 * hidden：当设置 true 的时候该路由不会在侧边栏出现
 * redirect：/当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 */
const routes = [
  {
    path: "/login",
    component: () => import("@/components/Login"),
    meta: {
      label: "登录页",
      hidden: true
    }
  },
  {
    label: "404",
    path: "/404",
    component: () => import("@/components/404"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/home",
    component: Layout,
    meta: {
      label: "主页"
    }
  },
  // 模块路由
  ...chart,
  ...table
];
export { routes };
export default new Router({
  routes
});
