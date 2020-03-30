<template>
  <div class="app">
    <Menu></Menu>
    <Doc></Doc>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Doc from "./components/Doc.vue";

export default {
  name: "App",
  components: {
    Menu,
    Doc
  }
};
</script>

<style>
.app {
  display: flex;
  height: 100%;
}
</style>
