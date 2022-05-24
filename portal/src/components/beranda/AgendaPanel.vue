<template>
  <div class="px-4">
    <v-card flat>
      <p></p>
      <v-row>
        <v-col>
          <h2>AGENDA</h2>
        </v-col>
        <v-col>
          <a
            href="#"
            class="text-decoration-underline"
          >Lihat semua</a>
        </v-col>
        <v-col cols="9"></v-col>
      </v-row>
      <v-row class="my-1"><AgendaCard></AgendaCard></v-row>
      <v-row class="my-1"><AgendaCard></AgendaCard></v-row>
      <v-row class="my-1"><AgendaCard></AgendaCard></v-row>
      <v-row class="my-1"><AgendaCard></AgendaCard></v-row>
    </v-card>
  </div>
</template>

<script>
import AgendaCard from './AgendaCard.vue'

export default {
  name: 'App',
  components: {
    AgendaCard
  }
}
</script>