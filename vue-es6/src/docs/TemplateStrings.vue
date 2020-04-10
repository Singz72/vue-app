<template>
  <div class="template_strings">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../md/single/template_strings.md";
export default {
  name: "template_strings",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>