<template>
  <div class="classes">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../md/single/classes.md";
export default {
  name: "classes",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>