<template>
  <div class="set">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/primitive_data_type/Set.md";
export default {
  name: "setType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>