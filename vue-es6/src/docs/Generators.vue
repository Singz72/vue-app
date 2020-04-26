<template>
  <div class="generators">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../md/single/generators.md";
export default {
  name: "generatorsType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>