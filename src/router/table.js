import Layout from "@/components/layout/Layout";

export default [
  {
    icon: "el-icon-menu",
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
      },
      {
        path: "/table/dynamic-table",
        component: () => import("@/views/modules/table/dynamic-table"),
        meta: {
          label: "动态表格"
        }
      }
    ]
  }
];
