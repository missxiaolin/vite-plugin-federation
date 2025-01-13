<template>
  <div>
    测试
    <!-- <CssModuleButton /> -->
    <!-- <component :is="component"></component> -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  components: {
    // CssModuleButton,
  },
  setup() {
    const component = ref(null);

    return {
      component,
    };
  },
};
</script>
