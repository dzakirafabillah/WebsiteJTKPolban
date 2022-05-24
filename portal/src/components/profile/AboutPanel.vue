<template>
    <div class="expansion-panel">
        <v-row>
           <v-col cols="auto">
               <v-card class="mt-3 ml-3" width="300">
                    <v-list>

                    <v-list-group
                        :value="true"
                    >
                        <template v-slot:activator>
                        <v-list-item-title>Profil</v-list-item-title>
                        </template>

                        <v-list-item link>
                            <v-list-item-title>Jurusan Teknik Komputer dan Informatika</v-list-item-title>
                        </v-list-item>

                        <v-list-group
                        no-action
                        sub-group
                        >
                        <template v-slot:activator>
                            <v-list-item-content>
                            <v-list-item-title>Program Studi</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                            v-for="([title, icon], i) in cruds"
                            :key="i"
                            link
                        >
                            <v-list-item-title v-text="title"></v-list-item-title>

                            <v-list-item-icon>
                            <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                        </v-list-group>
                    </v-list-group>

                    <v-list-item link>
                        <v-list-item-title>Kurikulum</v-list-item-title>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-title>Sarana Prasarana</v-list-item-title>
                    </v-list-item>

                    </v-list>
                    
                </v-card>
           </v-col>
           
           <v-col cols="auto">
                <div class="verticalLine"></div>
           </v-col>
        </v-row>
  </div>

  
</template>

<script>
  export default {
    data: () => ({
      cruds: [
        ['D3 Teknik Informatika'],
        ['D4 Teknik Informatika'],
      ],
    }),
  }
</script>

<style>
* {
  color: #19396C;
  font-weight: bold;
}

.verticalLine {
    border-left: 8px solid #E5842D;
    height: 100%;
}

.expansion-panel{
  margin: 3%;
}
</style>