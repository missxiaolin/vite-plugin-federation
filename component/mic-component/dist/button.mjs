import { Button as a } from "ant-design-vue";
import { resolveComponent as u, openBlock as d, createElementBlock as i, createTextVNode as r, createVNode as _, withCtx as l } from "vue";
/*!
* xiaolin Mon Jan 13 2025 19:45:44 GMT+0800 (中国标准时间)
* (c) 2021 @Energy Monster All Right Reserved..
*/
const m = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [n, s] of t)
    e[n] = s;
  return e;
}, f = {
  name: "lButton",
  components: {
    Button: a
  },
  setup(o) {
  }
}, w = { class: "powderblue" };
function b(o, t, e, n, s, v) {
  const c = u("a-button");
  return d(), i("div", w, [
    t[1] || (t[1] = r(" 我是插件组件 ")),
    _(c, null, {
      default: l(() => t[0] || (t[0] = [
        r("sss")
      ])),
      _: 1
    })
  ]);
}
const p = /* @__PURE__ */ m(f, [["render", b]]);
window.share || (window.share = {});
window.share[p.name] = p;
