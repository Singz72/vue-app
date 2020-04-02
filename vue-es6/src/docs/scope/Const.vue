<template>
  <div class="const">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/scope/const.md";
export default {
  name: "const",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>