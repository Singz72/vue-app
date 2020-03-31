<template>
  <div class="doc-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "doc-container"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.doc-container {
  padding-left: 290px;
}
</style>
