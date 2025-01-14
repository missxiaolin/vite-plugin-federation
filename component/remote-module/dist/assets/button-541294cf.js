import { _export_sfc, Button, resolveComponent, openBlock, createElementBlock, createTextVNode, createVNode, withCtx } from './index-d2e60b53.js';

const _sfc_main = {
  name: "lButton",
  components: {
    Button,
  },
  setup(props) {},
};

const _hoisted_1 = { class: "powderblue" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[1] || (_cache[1] = createTextVNode(" 我是插件组件 ")),
    createVNode(_component_a_button, null, {
      default: withCtx(() => _cache[0] || (_cache[0] = [
        createTextVNode("sss")
      ])),
      _: 1
    })
  ]))
}
const button = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { button as default };
