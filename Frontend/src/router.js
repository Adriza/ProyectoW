import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Iniciar_sesion.vue'
import publicaciones from './components/Publicacion.vue'






Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/publicaciones',
      name: 'home',
      component: publicaciones
    }
  ]
})

