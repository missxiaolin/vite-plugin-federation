<template>
  <div>1111</div>
</template>

<script>
import { ref } from "vue";
export default {
  components: {},
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};
</script>
