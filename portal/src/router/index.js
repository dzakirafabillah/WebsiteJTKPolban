import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './../App.vue'
import Agenda from './../views/Agenda.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: Homepage },
      { path: '/agenda', component: Agenda }
    ]
})