import Layout from "@/components/layout/Layout";

export default [
  {
    icon: "el-icon-s-data",
    path: "/chart",
    component: Layout,
    meta: {
      label: "图表"
    },
    children: [
      {
        path: "/chart/line",
        component: () => import("@/views/modules/chart/line"),
        meta: {
          label: "折线图"
        }
      },
      {
        path: "/chart/mix",
        component: () => import("@/views/modules/chart/mix"),
        meta: {
          label: "混合图表"
        }
      }
    ]
  }
];
