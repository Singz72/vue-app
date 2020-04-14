<template>
  <div class="import">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/module/import.md";
export default {
  name: "importType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>