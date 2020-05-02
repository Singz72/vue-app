<template>
  <div class="doc-container">
    <div class="doc-title">{{title}}</div>
    <div class="doc-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "doc-container",
  computed: {
    title() {
      return this.$route.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.doc-container {
  margin-left: 290px;
}
.doc-title {
  background-color: #305973;
  color: #fff;
  font-size: 5.1em;
  font-weight: 700;
  padding: 20px 35px;
  line-height: 1.6em;
  display: flex;
  align-items: center;
  font-family: STSong;
}
.doc-main {
  padding: 19px 35px 70px;
  /* max-width: 700px; */
}
.doc-main p img {
  width: 70%;
  display: block;
  margin: 0 auto;
}
</style>
