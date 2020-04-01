<template>
  <div class="block">
    <span v-html="content" v-highlightInsertd></span>
  </div>
</template>

<script>
import content from "./block.md";
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