<template>
  <v-card
    width="90%"
    class="mx-3"
    flat
  >
    <v-row dense>
      <v-col cols="3" class="mx-0">
        <v-card
          color="#E5842D"
          class="rounded-0"
          dark>
          <div class="text-center">
            <p class="my-0"><strong  id="date-agenda">10</strong></p>
            <p class="my-0"><strong>APR</strong></p>
            <p class="my-0 caption">SUNDAY</p>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat>
          <p class="my-0"><strong>PPKK Polban</strong></p>
          <p><v-icon color="red">mdi-map-marker</v-icon>Gedung Pendopo Polban</p>
        </v-card>
      </v-col>
        
    </v-row>
  </v-card>
</template>

<style>
#date-agenda{
  color:"#319396C"!important;
}
</style>