<template>
  <div class="arrow_functions">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../md/single/arrow_functions.md";
export default {
  name: "arrow_functions",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>