/**
 * api接口的统一出口
 */

// 模块 account
import base from "./base";
import department from "./department";

/* 这样写会有warning
export default {
  account,
}; */

const api = { base, department };
export default api;
