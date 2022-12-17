<template>
  <div id="app">
    <Head></Head>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Head, Footer
  }
}
</script>
<style scoped>
@import url('./assets/weili.css');
</style>
