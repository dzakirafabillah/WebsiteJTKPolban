<template>
  <div id="agenda">
    <Header></Header>
    <h3>AGENDA</h3>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h3{
    margin-left: 4%;
    margin-top: 2%;
}
</style>
