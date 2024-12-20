<template>
  <div id="css-modules-div">
    <h1 :class="$style.powderblue">{{ title }}ceshi</h1>
    <a-button :class="$style.button" @click="title = title + '!'"
      >Button with styleceshi</a-button
    >
  </div>
</template>

<script>
// import styles from './Button.module.css'
export default {
  data: function () {
    return {
      title: "",
    };
  },
};
</script>
<style module>
.powderblue {
  color: powderblue;
}
</style>
