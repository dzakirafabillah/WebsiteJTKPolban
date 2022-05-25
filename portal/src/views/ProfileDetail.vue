<template>
  <div id="profiledetail">
    <Header></Header>
    <v-row>
      <Banner></Banner>
    </v-row>

    <div class="content">
      <v-row >
      <v-col cols="4">
        <AboutPanel></AboutPanel>
      </v-col>

      <v-col class="auto">
        <h1>{{judul}}</h1>
        <p id="tanggal">{{tanggal}}</p>

  
        <div class="d-inline-block">
          <v-img 
            class="image"
            v-bind:src="require('@/assets/kelas_ai.png')"      
            width="50%"
            max-height="auto"
            float="left"
          ></v-img>

          <p class="description">   
            Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung (lebih dikenal dengan singkatan JTK) merupakan jurusan penyelenggara pendidikan diploma bidang teknologi informasi pertama di Indonesia. Jurusan ini telah menyelenggarakan pendidikan D-3 bidang teknik komputer dan informatika sejak 1977 dan pendidikan D-4 sejak 2009.
            Dengan daya tampung sekitar 96 mahasiswa per tahun, sampai saat ini JTK telah menghasilkan lebih dari 2.500 alumni yang bekerja pada berbagai sektor industri, baik di dalam maupun di luar negeri.
            Selain menjalankan pendidikan, JTK juga menyelenggarakan penelitian dan pengabdian kepada masyarakat dalam bidang teknologi informasi. Sebagai jurusan pertama yang menyelenggarakan pendidikan profesional bidang teknologi informasi, JTK selalu dijadikan tolok ukur dan telah banyak memberikan bantuan teknis dan non-teknis kepada institusi lain maupun kepada masyarakat umum. Beberapa aktivitas yang sering dilakukan di antaranya adalah pembinaan institusi, pelatihan bidang TI, konsultasi pemanfaatan TI untuk menunjang kegiatan kerja, pengembangan sistem informasi, dan lab/bengkel komputer layanan masyarakat.

            JTK memiliki visi untuk menjadi jurusan unggulan dan terdepan di bidang pengkajian, penerapan dan pengembangan teknologi informasi, yang diakui baik di tingkat nasional maupun internasional.

            Visi ini dijabarkan ke dalam misi sebagai berikut:

            1. Menyelenggarakan pendidikan yang menghasilkan sumber daya manusia yang profesional dibidang teknologi informasi;
            2. Menyelenggarakan program penelitian yang menghasilkan produk unggulan dibidang teknologi informasi;
            3. Meningkatkan pemanfaatan teknologi informasi di lingkungan internal maupun lingkungan eksternal (industri, pemerintah dan masyarakat umum);
            4. Menjadi tempat bagi sivitas akademika untuk saling bertukar gagasan dalam lingkungan yang kondusif.
            
          </p>
        </div>
        
      
      </v-col>
    </v-row>

    </div>
    
      
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
  },
  data: () => ({
    judul: "Jurusan Teknik Komputer dan Informatika",
    tanggal: "22 April 2022"
  }),
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h1{ 
  text-align: left;
}

.content{ 
  margin: 1%;
  margin-top: 3%;
  margin-right: 8%;
}

#tanggal{ 
  font-weight: bolder;
}

p{
  font-weight: lighter;
  text-align: justify;
}

/* .container {
    float:left;
    position: relative;
    width: 100%;
    display: inline-block;
} */

/* .description .image {
  display: inline-block;
} */

</style>
