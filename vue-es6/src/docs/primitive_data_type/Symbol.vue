<template>
  <div class="symbol">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/primitive_data_type/Symbol.md";
export default {
  name: "symbolType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>