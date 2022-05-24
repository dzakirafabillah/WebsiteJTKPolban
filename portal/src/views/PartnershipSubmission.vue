<template>
  <div id="agenda">
    <Header></Header>
    <h3>FORMULIR PENGAJUAN KERJASAMA</h3>
    <div class="partnership-submission">

    </div>
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
    text-align: center;
    margin-top: 2%;
}
</style>
