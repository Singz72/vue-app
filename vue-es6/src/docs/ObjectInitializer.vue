<template>
  <div class="Object_initializer">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../md/single/Object_initializer.md";
export default {
  name: "Object_initializer",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>