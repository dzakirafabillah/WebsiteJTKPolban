<template>
    <div id="portal-berita">
        <Header></Header>
        <div id="artikel">
            <div id="judul">{{title}}</div>
                <v-row>
                    <v-col md="auto"><v-img v-bind:src="require('@/assets/blank_profile_pic.png')" max-height="50" max-width="50" id="prof_pict"></v-img></v-col>
                    <v-col>
                        <div id="author">Manajemen JTK</div>
                        <div id="tanggal">23 November 2020</div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col><v-img v-bind:src="require('@/assets/wisudapolban.jpg')" width="100%" id="thumb"></v-img></v-col>
                    <v-col md="auto" id="share_social">
                        <v-img v-bind:src="require('@/assets/share_icon.png')" width="4rem" id="share"></v-img>
                        <v-img v-bind:src="require('@/assets/fb.png')" width="4rem" id="fb"></v-img>
                        <v-img v-bind:src="require('@/assets/twit.png')" width="4rem" id="twit"></v-img>
                        <v-img v-bind:src="require('@/assets/insta.png')" width="4rem" id="insta"></v-img>
                        <v-img v-bind:src="require('@/assets/path.png')" width="4rem" id="path"></v-img>
                        <v-img v-bind:src="require('@/assets/wa.png')" max-width="4rem" id="wa"></v-img>
                    </v-col>
                </v-row>
            
            <div id="content">{{article_content}}</div>
        </div>
        <Berita></Berita>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Berita from '../components/beranda/BeritaPanel.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Berita
    },
    data() {
        return {
            title: 'JTK Raih Lulusan D3 Terbaik di Wisuda Polban 2020',
            article_content: '\tSabtu (14/11/2020), Politeknik Negeri Bandung menggelar Sidang terbuka senat Politeknik Negeri Bandung Wisuda Program Magister Terapan, Sarjana Terapan, dan Diploma Tahun Akademik 2019/2020.\n\nWisuda diselenggarakan secara offline di Pendopo Tony Seowandito dan online melalui media Youtube sebagai antisipasi penyebaran virus covid-19. Berikut merupakan video live-streaming wisuda Polban 2020. Acara dimulai pada 8.50 WIB dan berakhir pukul 12.00 WIB. Pada wisuda tahun ini JTK berhasil meraih gelar wisudawan terbaik D3 se-Polban berkat M Wahyu Maulana Akbar (171511019).\n\nWisudawan dari Jurusan Teknik Komputer dan Informatika mengikuti acara ramah tamah mulai pukul 13.00 WIB yang diselenggarakan oleh manejemen JTK lewat aplikasi zoom. Kegiatan tersebut diisi dengan sambutan manajemen, wisudawan terbaik, serta industri. Selanjutnya dilaksanakan pula sesi tanya jawab dan penyampaian kesan dan pesan oleh wisudawan dari JTK.\n\nWisuda tahun 2020 ini adalah wisuda ke 30 tahun, setelah JTK pindah ke kampus Ciwaruga. Sebelumnya JTK, beraada di kampus Ganesha, dibawah binaan ITB. Harapan kita semua agar JTK semakin dapat menjalankan amanahnya sebagai institusi pendidikan yang cukup tua.\n\nSelamat kepada wisudawan D3 dan D4 JTK Polban ! Semoga ilmu yang telah didapatkan selama kuliah di JTK dapat menjadi bekal untuk melangkah lebih jauh ke puncak kesuksesan'
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

#artikel{
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;
    font-family: 'Spectral';
    border: 1px solid #e0e0e0;
}

#judul{
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
}

#prof_pict{
    border-radius: 50%;
}

#author{
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
}

#tanggal{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
}

#content{
    padding-right: 5%;
    text-align: justify;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    white-space: pre-wrap;
}

#thumb{
    margin-bottom: 3rem;
}
</style>