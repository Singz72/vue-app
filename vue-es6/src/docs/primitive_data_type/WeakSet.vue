<template>
  <div class="weakSet">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/primitive_data_type/WeakSet.md";
export default {
  name: "weakSetType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>