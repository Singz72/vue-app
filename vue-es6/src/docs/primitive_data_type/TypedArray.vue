<template>
  <div class="typedArray">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/primitive_data_type/TypedArray.md";
export default {
  name: "typedArrayType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>