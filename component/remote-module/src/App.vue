<template>
  <div>
    <!-- 方案一 -->
    <!-- <component :is="component"></component> -->
    <!-- 方案二 -->
    <lButton />
  </div>
</template>

<script>
import { onMounted, ref, defineAsyncComponent, markRaw, shallowRef } from "vue";
import { loadRemoteComponent } from "@vite-plugin-remote-module";
import lButton from "@remote/http://localhost:5000/button.vue";

export default {
  components: {
    lButton,
  },
  setup() {
    const component = ref(null);

    onMounted(() => {
      // loadRemoteComponent("http://localhost:5000/button.vue").then((comp) => {
      //   component.value = markRaw(comp);
      // });
    });

    return {
      component,
    };
  },
};
</script>
