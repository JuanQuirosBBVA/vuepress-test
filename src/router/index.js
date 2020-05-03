import Vue from 'vue'
import Router from 'vue-router'
import Leccion from '@/components/Leccion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/foo',
      name: 'Hello',
      component: Leccion
    }
  ]
})
 