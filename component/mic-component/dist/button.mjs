import { openBlock as c, createElementBlock as a } from "vue";
/*!
* xiaolin Mon Jan 13 2025 21:33:34 GMT+0800 (中国标准时间)
* (c) 2021 @Energy Monster All Right Reserved..
*/
const p = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [n, s] of e)
    t[n] = s;
  return t;
}, _ = {
  name: "lButton",
  components: {},
  setup(o) {
  }
}, i = { class: "powderblue" };
function d(o, e, t, n, s, u) {
  return c(), a("div", i, "我是插件组件");
}
const r = /* @__PURE__ */ p(_, [["render", d]]);
window.share || (window.share = {});
window.share[r.name] = r;
