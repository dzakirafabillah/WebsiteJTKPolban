<template>
  <div id="app">
    <Header></Header>
    <v-row>
      <Banner></Banner>
    </v-row>
    <v-row>
      <Berita></Berita>
      <Agenda></Agenda>
    </v-row>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Berita from './components/beranda/BeritaPanel.vue'
import Agenda from './components/beranda/AgendaPanel.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Berita,
    Agenda,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
