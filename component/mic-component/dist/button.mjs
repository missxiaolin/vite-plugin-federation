import { openBlock as s, createElementBlock as r } from "vue";
/*!
* xiaolin Mon Jan 13 2025 21:45:12 GMT+0800 (中国标准时间)
* (c) 2021 @Energy Monster All Right Reserved..
*/
const p = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, _ = {
  name: "lButton",
  components: {},
  setup(t) {
  }
}, a = { class: "powderblue" };
function u(t, e, o, n, c, l) {
  return s(), r("div", a, "我是插件组件");
}
const f = /* @__PURE__ */ p(_, [["render", u]]);
export {
  f as default
};
