<template>
  <div class="reflect">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../md/single/Reflect.md";
export default {
  name: "reflectType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>