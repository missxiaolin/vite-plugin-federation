<template>
  <div>
    <component :is="component"></component>
  </div>
</template>

<script>
import { onMounted, ref, defineAsyncComponent, markRaw } from "vue";
import { Button } from "ant-design-vue";

export default {
  components: {
    [Button.name]: Button,
  },
  setup() {
    const component = ref(null);

    const addComp = async (name) => {
      console.log(name);
      try {
        const com = await import("http://localhost:5010/button.mjs");
        component.value = markRaw(com.default);
      } catch (error) {
        console.error(error);
      }
      // await loadComponent(name);
      // console.log(window.share);
      // component.value = window.share[name];
    };

    onMounted(() => {
      // 动态注册组件
      addComp("lButton");
    });

    return {
      component,
    };
  },
};
</script>
