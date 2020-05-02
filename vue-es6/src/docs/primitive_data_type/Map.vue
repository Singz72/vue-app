<template>
  <div class="map">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/primitive_data_type/Map.md";
export default {
  name: "mapType",
  data() {
    return {
      content
    };
  }
};
</script>

<style>
</style>