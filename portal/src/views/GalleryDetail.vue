<template>
  <div id="agenda">
    <Header></Header>
    <h1>{{gallery_name}}</h1>

    <div class="mt-4 albums">
      <v-list class="mt-3 ml-3 mr-3">
        <v-list-item
          class="mt-2"
          v-for="album in albums"
          :key="album"
        >

          <!-- <h3>{{album.album_name}}</h3> -->
          
          <span>{{album.album_title}}</span>
          
          <v-carousel
            :show-arrows="false"
          >
            <v-carousel-item 
              class="album"
              v-for="(item,i) in album.items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
             
            </v-carousel-item>
          </v-carousel>
                          
                              
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
    Footer,
  },

  data () {
      return {
        gallery_name : "ACARA JTK",
        albums:[
          {
            album_name: "Nama Album 1",
            items: [
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
              },
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
              },
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
              },
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
              },
            ],
          },
          {
            album_name: "Nama Album 2",
            items: [
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
              },
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
              },
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
              },
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
              },
            ],
          }

        ]
        
      }
    },

 
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

.album{ 
  margin-top: 3%;
  margin-bottom: 7%;
  min-width: 100%;
}

.albums{ 
  margin-left: 7%;
  margin-right: 7%;
}

.album-title{ 
  width: 100%;
  position:absolute;
}

</style>
