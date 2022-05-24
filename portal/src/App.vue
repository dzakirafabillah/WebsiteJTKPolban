<template>
  <div id="app">
    <Header></Header>
    <v-row>
      <Banner></Banner>
    </v-row>
    <v-row>
      <v-col class="ma-0 pa-0" cols="9"><Berita></Berita></v-col>
      <v-col class="ma-0 pa-0"><Agenda></Agenda></v-col>
    </v-row>
    <v-row>
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
