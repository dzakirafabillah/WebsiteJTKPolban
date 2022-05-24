<template>
  <div id="agenda">
    <Header></Header>
    <h2>FORMULIR PENGAJUAN KERJASAMA</h2>
    <div class="partnership-submission">
        <v-container fluid >
          <v-row>
            <v-col cols="4">
              <p class="font-weight-bold">Mitra Kerja Sama</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                class="rounded-0 ml-4"
                label="Mitra Kerja Sama"
                solo
              ></v-text-field>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p
              >Data PIC Mitra</p>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p>Nama</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                class="rounded-0 ml-4"
                label="Nama"
                solo
              ></v-text-field>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p>Nomor Telepon</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                class="rounded-0 ml-4"
                label="Nomor telepon"
                solo
              ></v-text-field>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p>Email</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                class="rounded-0 ml-4"
                label="Email"
                solo
              ></v-text-field>
            </v-col>
          </v-row>


           <v-row>
            <v-col cols="4">
              <p>Lingkup Kerja Sama</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-textarea
                class="rounded-0 ml-4"
                solo
                name="input-7-4"
                label="Lingkup kerjasama antara mitra dengan JTK"
              ></v-textarea>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p>Rencana Kegiatan</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-textarea
                class="rounded-0 ml-4"
                solo
                name="input-7-4"
                label="Rencana kegiatan kerjasama antara mitra dengan JTK"
              ></v-textarea>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p>Surat Permohonan Kerjsama</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
               <v-file-input
                  class="rounded-0 ml-4"
                  label="Upload file permohonan kerja sama"
                  outlined
                  dense
                ></v-file-input>
            </v-col>
          </v-row>

        </v-container>

      <v-row>
        <v-col></v-col>
        <v-col cols="12" md="auto">
              <v-btn
                @click = submitAction
                dark
                class="rounded-0 ml-4"
                color="#19396C"
              >Kirim</v-btn>
        </v-col>
        <v-col col lg="2"></v-col>
      </v-row>

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
  },
  data: () => ({
  }),
  methods: {
    submitAction(){

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h2{
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
}

.partnership-submission{
  margin-top: 4%;
  margin-left: 10%;
  margin-right: 10%;
}

</style>
