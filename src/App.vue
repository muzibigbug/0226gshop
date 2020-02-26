<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
export default {
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus">
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position relative
}

</style>
