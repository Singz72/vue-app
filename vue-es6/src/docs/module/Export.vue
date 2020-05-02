<template>
  <div class="export">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/module/export.md";
export default {
  name: "exportType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>