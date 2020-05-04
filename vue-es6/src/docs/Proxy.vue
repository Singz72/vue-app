<template>
  <div class="proxy">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../md/single/Proxy.md";
export default {
  name: "proxyType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>