<template>
  <div class="powderblue">
    我是插件组件
    <a-button @click="ceshi">sss</a-button>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
export default {
  name: "lButton",
  components: {
    Button,
  },
  setup(props) {
    const ceshi = () => {
      console.log("ceshi");
    };

    return {
      ceshi,
    };
  },
};
</script>
