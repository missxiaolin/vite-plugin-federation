<template>
  <div>
    <component :is="component"></component>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  components: {},
  setup() {
    const component = ref(null);

    onMounted(() => {
      // 动态注册组件
      requirejs(["http://localhost:5010/button.amd.js"], (com) => {
        console.log(com);
      });
    });

    return {
      component,
    };
  },
};
</script>
