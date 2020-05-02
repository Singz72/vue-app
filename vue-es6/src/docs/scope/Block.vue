<template>
  <div class="block">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/scope/block.md";
export default {
  name: "block",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>