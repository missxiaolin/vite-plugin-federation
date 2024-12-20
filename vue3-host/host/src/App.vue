<template>
  <div v-if="component">
    <!-- <CssModuleButton /> -->
    <component :is="component"></component>
  </div>
</template>

<script>
import { ref } from "vue";
// 第一种方案
// import CssModuleButton from "css-modules/Button";

// 第三种方案
import {
  __federation_method_setRemote,
  __federation_method_getRemote,
  __federation_method_unwrapDefault,
} from "virtual:__federation__";
export default {
  components: {
    // CssModuleButton,
  },
  setup() {
    const component = ref(null);
    // 第三种方案
    __federation_method_setRemote("css-modules", {
      url: () => Promise.resolve("http://localhost:5003/assets/remoteEntry.js"),
      format: "esm",
      from: "vite",
    });

    const dynamicComponents = ["Button"];
    const res = [];
    const init = async () => {
      for await (let value of dynamicComponents) {
        const moduleWraped = await __federation_method_getRemote(
          "css-modules",
          `./${value}`
        );
        res.push({
          name: `css-modules-${value.toLowerCase()}`,
          component: __federation_method_unwrapDefault(moduleWraped),
        });
      }
      component.value = res[0].component;
    };

    init();

    return {
      component,
    };
  },
};
</script>
