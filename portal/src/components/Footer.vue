  <template>
  <div id="app">
    <v-app id="inspire">
      <v-footer
        dark
        padless
        absolute
      >
        <v-card
          flat
          tile
          width="100%"
          class="white--text"
          color="#19396C"
        >
          <v-card-text class="white--text">
            <strong>Terhubung dengan kami:</strong>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-2"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          
          <v-divider></v-divider>
          <v-card-text class="white--text pt-0">
            <v-row>
              <v-col>a</v-col>
              <v-col>
                <v-row>
                  <strong>Kontak</strong>
                </v-row>
                <v-row>
                  <p>Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung</p>
                </v-row>
                <v-row>
                  <p>Jl. Gegerkalong Hilir, Ds. Ciwaruga, Bandung 40559, Jawa Barat Telp. (022) 2013789 ext. 301</p>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <strong>Tautan Langsung</strong>
                </v-row>
                <v-row>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Jurusan</v-list-item-title>
                      <v-list-item-title>Kurikulum</v-list-item-title>
                      <v-list-item-title>Berita</v-list-item-title>
                      <v-list-item-title>Galeri</v-list-item-title>
                      <v-list-item-title>Penerimaan</v-list-item-title>
                      <v-list-item-title>Mahasiswa</v-list-item-title>
                      <v-list-item-title>Sarana Prasarana</v-list-item-title>
                      <v-list-item-title>Info Kerjasama</v-list-item-title>
                      <v-list-item-title>Tracer Study</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <strong>Pilihan Bahasa</strong>
                </v-row>
                <v-row>
                  <div class="my-2">
                    <v-btn
                      color="#2A5697"
                    >
                      <v-icon>em-flag-id</v-icon>
                      <span class="flag-icon flag-icon-id" id="flag"></span>
                      Indonesia</v-btn>
                  </div>
                </v-row>
                <v-row>
                  <div class="my-2">
                    <v-btn
                      color="#2A5697"
                    >Inggris</v-btn>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
    
          <v-divider></v-divider>
    
          <v-card-text class="white--text text-center">
            <v-row cols="4"></v-row>
            <strong>Copyright © 2022 Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-instagram',
      'mdi-twitter',
      'mdi-youtube',
      'mdi-linkedin',
    ]
  }),
};
</script>
