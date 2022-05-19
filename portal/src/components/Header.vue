<template>
  <div class="header-panel">
      <v-toolbar flat height="100">
      <v-col></v-col>
      <v-toolbar-side-icon>
        <v-img
          v-bind:src="require('@/assets/polban.png')"
          max-height="80"
          max-width="50"
        ></v-img>
        
      </v-toolbar-side-icon>
      <v-toolbar-items>  
      <v-col></v-col>
        <v-app>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                color="#19396C"
                v-bind="attrs"
                v-on="on"
                height="100"
              >TENTANG</v-btn>
            </template>
            <v-treeview :items="items"></v-treeview>
          </v-menu>
        </v-app>
        
        <v-col></v-col>
        <v-btn
          text
          color="#19396C"
          >BERITA</v-btn>
        <v-col></v-col>
        <v-btn 
          text
          color="#19396C"
          >GALERI</v-btn>
        <v-col></v-col>
        <v-btn 
          text
          color="#19396C"
          >PENERIMAAN</v-btn>
        <v-col></v-col>
        <v-btn 
          text
          color="#19396C"
          >MAHASISWA</v-btn>
        
      </v-toolbar-items>
      <v-col></v-col>
      <v-col></v-col>
      <v-text-field
        class="rounded-0 mt-4"
        solo
        dark
        placeholder="Cari..."
        append-icon="mdi-magnify"
        background-color="#19396C"
      ></v-text-field>
      
      <v-col></v-col>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({
    items: [
      {
        id: 1, 
        name: 'Profil',
        children: [
          {
            id: 101,
            name: 'Jurusan Teknik Komputer dan Informatika',
          },
          {
            id: 102,
            name: 'Program Studi',
            children: [
              {
                id: 1021,
                name: 'D3 Teknik Informatika'
              },
              {
                id: 1022,
                name:'D4 Teknik Informatika'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Kurikulum'
      },
      {
        id: 3,
        name: 'Sarana Prasarana'
      },
      {
        id: 4,
        name: 'Pengajuan Kerja Sama'
      },
      {
        id: 5,
        name: 'Tracer Study'
      }
    ]

  }),
};
</script>

<style>
  ::placeholder {
    color: white!important;
  }

  .header-panel {
    border-bottom: 7px solid #19396C;
  }
</style>