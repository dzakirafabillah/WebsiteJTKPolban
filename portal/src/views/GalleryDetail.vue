<template>
  <div id="agenda">
    <Header></Header>
    <h1>{{gallery_name}}</h1>
    <Carousel></Carousel>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Carousel from '../components/album/Carousel.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Carousel,
  },

  data: () => ({
    gallery_name : "ACARA JTK",
  }),
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h1{
    margin-left: 4%;
    margin-top: 2%;
}
</style>
