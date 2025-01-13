<template>
  <div>
    <component :is="component"></component>
    <a-button>啥啥啥</a-button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { Button } from "ant-design-vue";

export default {
  components: {
    [Button.name]: Button,
  },
  setup() {
    const component = ref(null);

    const loadComponent = (name) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = `http://localhost:5010/button.umd.js`;
        script.onload = script.onreadystatechange = function () {
          resolve();
        };
        document.querySelector("head").appendChild(script);
      });

    const addComp = async (name) => {
      await loadComponent(name);
      console.log(window.share);
      component.value = window.share[name];
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
