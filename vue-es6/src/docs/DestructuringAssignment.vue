<template>
  <div class="destructuring_assignment">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../md/single/destructuring_assignment.md";
export default {
  name: "destructuring_assignment",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>