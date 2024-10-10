<template>
  <div>
    <div ref="container"></div>
  </div>
</template>

<script>
import { defineAsyncComponent, render, h, onMounted, ref } from "vue";
import {
  __federation_method_setRemote,
  __federation_method_getRemote,
  __federation_method_unwrapDefault,
} from "virtual:__federation__";
// import Content from "./components/Content.vue";
// import Button from "./components/Button.js";
// import UnusedButton from "./components/UnusedButton.vue";
// const CssModuleButton = defineAsyncComponent(() =>
//   import("css-modules/Button")
// );
// app.component("css-modules-button", CssModuleButton);
export default {
  data() {

  },
  components: {
    // Content,
    // Button,
    // UnusedButton,
    // "css-modules-button": CssModuleButton,
  },
  mounted() {
    __federation_method_setRemote("dynamic", {
      url: () => Promise.resolve("http://localhost:5003/assets/remoteEntry.js"),
      format: "esm",
      from: "vite",
    });
    __federation_method_getRemote("dynamic", "./Button")
      .then((moduleWraped) => __federation_method_unwrapDefault(moduleWraped))
      .then((module) => {
        console.log(module);
        render(h(module, {}), this.$refs.container);
      });
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
.h1 {
  border: 5px solid red !important;
  padding: 1px !important;
}
.section {
  border: 1px solid black;
  padding: 10px;
}
</style>
