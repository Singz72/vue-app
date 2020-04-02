<template>
  <div class="spread_parameters">
    <span v-html="content" v-highlightInserted></span>
  </div>
</template>

<script>
import content from "../../md/parameters/default_parameters.md";
export default {
  name: "spread_parameters",
  data(){
    return {
      content
    }
  }
};
</script>

<style>
</style>