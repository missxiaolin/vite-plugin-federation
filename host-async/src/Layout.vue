<template>
  <div>
    <css-modules-button />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import Content from "./components/Content.vue";
// import Button from "./components/Button.js";
// import UnusedButton from "./components/UnusedButton.vue";
const CssModuleButton = defineAsyncComponent(() => import("css-modules/Button"));
// app.component("css-modules-button", CssModuleButton);
export default {  components: {
    // Content,
    // Button,
    // UnusedButton,
    'css-modules-button': CssModuleButton
  },};
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
