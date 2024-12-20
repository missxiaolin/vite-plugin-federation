<template>
  <div>
    <CssModuleButton />
  </div>
</template>

<script>
import { ref } from "vue";
// 第一种方案
// import CssModuleButton from "css-modules/Button";
export default {
  components: {
    // CssModuleButton,
  },
  setup() {
    // 第三种方案
    return {};
  },
};
</script>
