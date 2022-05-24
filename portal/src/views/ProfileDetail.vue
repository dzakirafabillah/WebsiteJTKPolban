<template>
  <div id="profiledetail">
    <Header></Header>
    <v-row>
      <Banner></Banner>
    </v-row>
    <AboutPanel></AboutPanel>  
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import AboutPanel from '../components/about/AboutPanel.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Footer,
    AboutPanel
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
