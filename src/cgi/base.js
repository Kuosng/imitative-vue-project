/**
 * account 模块接口列表
 */

import http from "@/request/http";
import domain from "./domain";
// import qs from "qs";

const base = {
  // 获取验证码
  getCode(params) {
    return http.get(`${domain.A}/base/getCode`, {
      params,
    });
  },

  // 登录
  loginUser(params) {
    // return http.post(`${domain.A}/base/loginUser`, qs.stringify(params));
    return http.post(`${domain.A}/base/loginUser`, params);
  },
};

export default base;
