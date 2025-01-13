import { createApp } from "vue";
import * as Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
// window.vue = Vue;

// System.import("index", "http://localhost:5010/my-button.es.js");
// System.register(["index"], function (_export, _context) {
//   "use strict";
//   console.log(11);
//   var Index;
//   return {
//     setters: [
//       function (_index) {
//         Index = _index.default;
//       },
//     ],
//     // 声明异步函数
//     execute: async function () {
//       const container = await getContainerFromRemote();
//       console.log(container);
//       //   ReactDOM.render("render to container from remote", container);
//     },
//   };
// });

System.import("index", "http://localhost:5010/mic-component.mjs").then(
  (res) => {
    console.log(res);
  }
);

// System.import("http://localhost:5010/mic-component.system.js")
//   .then(function (module) {
//     console.log("模块加载成功", module);
//   })
//   .catch(function (err) {
//     console.error("模块加载失败", err);
//   });

const app = createApp(App);
app.use(Antd);
app.mount("#root");
