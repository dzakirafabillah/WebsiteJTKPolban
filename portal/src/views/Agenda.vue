<template>
  <div id="agenda">
    <Header></Header>
    <h1 class="mb-4">AGENDA</h1>

    <div class="mt-4 agendas">
                
                    <v-list class="mt-3 ml-3 mr-3">
                       <v-list-item
                            class="mt-2"
                            v-for="item in agendas"
                            :key="item"
                            link
                        >
                          <v-card class="mt-3 ml-3 mr-3" >
                            <v-row class="mt-1 mb-1">
                              <v-col cols="auto" id="tanggal">
                                <p>{{ item.tanggal }}</p>
                                <p>{{ item.bulan }}</p>
                                <p>{{ item.tahun }}</p>
                              </v-col>

                              <v-col cols="auto">
                                <div class="verticalLine"></div>
                              </v-col>
                                
                              <v-col >
                                <p id="nama-acara">{{ item.nama_agenda }}</p>
                                
                                <v-row>
                                  <v-col cols="auto">
                                    <v-icon id="map-marker">mdi-map-marker</v-icon>
                                  </v-col>
                                  <v-col>
                                    <p id="nama-lokasi">{{ item.lokasi }}</p>
                                  </v-col>
                                </v-row>
                                
                                <p>{{ item.deskripsi }}</p>
                              </v-col>

                            </v-row>
                          </v-card>
                              
                        </v-list-item>
                
                    </v-list>
                    
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
  
      agendas: [
        {nama_agenda: "Agenda 1",
         tanggal : "10",
         bulan : "APR",
         tahun : "2022",
         lokasi : "Politeknik Negeri Bandung",
         deskripsi : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate luctus imperdiet proin tristique sagittis, elementum. Sit platea purus elementum in eu sed volutpat. Nunc massa aliquam at quam egestas nam. Sem eget eget accumsan dictum dui. Sit commodo, non quam elementum, sit suspendisse euismod ante mi. Volutpat pellentesque tempor, lectus auctor id et. Morbi mi risus, et a. Eget nibh blandit erat magna eget sagittis." 
        },
        {nama_agenda: "Agenda 2",
         tanggal : "10",
         bulan : "APR",
         tahun : "2022",
         lokasi : "Politeknik Negeri Bandung",
         deskripsi : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate luctus imperdiet proin tristique sagittis, elementum. Sit platea purus elementum in eu sed volutpat. Nunc massa aliquam at quam egestas nam. Sem eget eget accumsan dictum dui. Sit commodo, non quam elementum, sit suspendisse euismod ante mi. Volutpat pellentesque tempor, lectus auctor id et. Morbi mi risus, et a. Eget nibh blandit erat magna eget sagittis." 
        },
        {nama_agenda: "Agenda 3",
         tanggal : "10",
         bulan : "APR",
         tahun : "2022",
         lokasi : "Politeknik Negeri Bandung",
         deskripsi : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate luctus imperdiet proin tristique sagittis, elementum. Sit platea purus elementum in eu sed volutpat. Nunc massa aliquam at quam egestas nam. Sem eget eget accumsan dictum dui. Sit commodo, non quam elementum, sit suspendisse euismod ante mi. Volutpat pellentesque tempor, lectus auctor id et. Morbi mi risus, et a. Eget nibh blandit erat magna eget sagittis." 
        },
        {nama_agenda: "Agenda 4",
         tanggal : "10",
         bulan : "APR",
         tahun : "2022",
         lokasi : "Politeknik Negeri Bandung",
         deskripsi : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vulputate luctus imperdiet proin tristique sagittis, elementum. Sit platea purus elementum in eu sed volutpat. Nunc massa aliquam at quam egestas nam. Sem eget eget accumsan dictum dui. Sit commodo, non quam elementum, sit suspendisse euismod ante mi. Volutpat pellentesque tempor, lectus auctor id et. Morbi mi risus, et a. Eget nibh blandit erat magna eget sagittis." 
        },
      ],
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

.agendas{
  margin-left: 4%;
  margin-right: 4%;
  
}

.verticalLine {
    border-left: 4px solid #19396C;
    height: 100%;
}

#tanggal{
  font-size: 230%;
  font-weight: bold;
  color: #E5842D;
  text-align: center;
  padding-left: 3%;
  padding-right: 3%;
}

#nama-acara{ 
  font-size: 160%;
  color: #19396C;
  font-weight: bold;
}

#nama-lokasi{ 
  font-weight: bold;
  color: #878787;
}

#map-marker{
  color: #FF3D00;
}
</style>
