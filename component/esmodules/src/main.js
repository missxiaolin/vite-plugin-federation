import { createApp } from "vue";
import * as Vue from "vue";
import App from "./App.vue";

const app = createApp(App);

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
app.use(Antd);
window.Vue = Vue;

app.mount("#root");
