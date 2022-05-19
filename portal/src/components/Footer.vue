  <template>
  <div id="app">
    <v-app id="inspire">
      <v-footer
        dark
        padless
        app
        bottom
        absolute
        fixed
      >
        <v-card
          flat
          tile
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
              <v-col>b</v-col>
              <v-col>c</v-col>
              <v-col>
                <v-row>
                  <strong>Pilihan Bahasa</strong>
                </v-row>
                <v-row>
                  <!-- <v-btn>Indonesia</v-btn>
                  <v-btn>Inggris</v-btn> -->
                </v-row>
              </v-col>
            </v-row>
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula laci\
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
