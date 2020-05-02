<template>
  <div class="let">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/scope/let.md";
export default {
  name: "let",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>