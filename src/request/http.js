/* 
1.去掉了之前get和post方法的封装，通过创建一个axios实例然后export default方法导出，这样使用起来更灵活一些。
2.去掉了通过环境变量控制baseUrl的值。考虑到接口会有多个不同域名的情况，所以准备通过js变量来控制接口域名。这点具体在api里会介绍。
3.增加了请求超时，即断网状态的处理。说下思路，当断网时，通过更新vuex中network的状态来控制断网提示组件的显示隐藏。断网提示一般会有重新加载数据的操作，这步会在后面对应的地方介绍。
4.公用函数进行抽出，简化代码，尽量保证单一职责原则。
*/

import axios from "axios";
import { message } from "antd";
import { getToken, getUserName } from "@/utils/cookie";

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      message.error("登录过期，请重新登录");
      break;
    // 404请求不存在
    case 404:
      message.error("请求的资源不存在");
      break;
    default:
      console.log(other);
  }
};

// 获取 cookie 存储的token
const token = getToken();
const user_name = getUserName();

// 创建axios实例
let instance = axios.create({ timeout: 1000 * 5 });

// 设置post请求头
instance.defaults.headers.post["Content-Type"] =
  "applicaation/x-www-form-urlencoded";

// 请求拦截（处理某些情况：有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据）
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // 如果 token 存在，则添加到请求头
    token && (config.headers.Authorization = token);
    user_name && (config.headers["userName"] = user_name);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const { data } = response;
    return data;
  },
  (err) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { response } = err; // 错误信息在 err.response 中，不能单独取 err
    if (response) {
      // 请求有返回，但不是2XX
      errorHandle(response.status, response.data.message);
      return Promise.reject(err);
    } else {
      // 请求无返回
      return Promise.reject(err);
    }
  }
);

export default instance;
