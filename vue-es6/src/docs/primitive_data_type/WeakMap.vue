<template>
  <div class="weakMap">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/primitive_data_type/WeakMap.md";
export default {
  name: "weakMapType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>