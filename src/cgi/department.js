/**
 * account 模块接口列表
 */

import http from "@/request/http";
import domain from "./domain";
// import qs from "qs";

const department = {
  // 添加部门
  addDepartment(params) {
    return http.post(`${domain.A}/department/add`, params);
  },
  // 部门列表
  getDepartmentList(params) {
    return http.get(`${domain.A}/department/list`, {
      params,
    });
  },
  // 删除部门
  deleteDepartment(params) {
    return http.post(`${domain.A}/department/delete`, {
      params,
    });
  },
};

export default department;
