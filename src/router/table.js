import Layout from "@/components/layout/Layout";

export default [
  {
    path: "/table",
    component: Layout,
    meta: {
      label: "表格"
    },
    children: [
      {
        path: "/table/basic",
        component: () => import("@/views/modules/table/basic"),
        meta: {
          label: "基本"
        }
      }
    ]
  }
];
