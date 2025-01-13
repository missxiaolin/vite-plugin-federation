import { createApp, shallowRef } from "vue";
import * as Vue from "vue";
import App from "./App.vue";

const app = createApp(App);

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
app.use(Antd);

// const loadComponent = (name) =>
//   new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = `http://localhost:5010/button.umd.js`;
//     script.onload = script.onreadystatechange = function () {
//       resolve();
//     };
//     document.querySelector("head").appendChild(script);
//   });
// const addComp = async (name) => {
//   await loadComponent(name);
//   console.log(shallowRef(window.share[name]).value);
//   app.component(name, shallowRef(window.share[name]).value);
//   //   component.value = markRaw(window.share[name]).value;
// };

// addComp("lButton");

app.mount("#root");
