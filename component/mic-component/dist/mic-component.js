"use strict";
const n = require("vue"),
  r = (t, o) => {
    const e = t.__vccOpts || t;
    for (const [s, c] of o) e[s] = c;
    return e;
  },
  p = { components: {}, setup(t) {} },
  _ = { class: "powderblue" };
function u(t, o, e, s, c, i) {
  return n.openBlock(), n.createElementBlock("div", _, " ceshi ");
}
const a = r(p, [["render", u]]);
module.exports = a;
