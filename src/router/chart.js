import Layout from "@/components/layout/Layout";

export default [
  {
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
      }
    ]
  }
];
