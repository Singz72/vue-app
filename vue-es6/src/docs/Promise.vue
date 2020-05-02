<template>
  <div class="promise">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../md/single/promise.md";
export default {
  name: "promiseType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>