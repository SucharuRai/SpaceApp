import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import nasa from '@/components/nasa'
import spacex from '@/components/spacex'
import isro from '@/components/isro'
import roscosmos from '@/components/roscosmos'
import esa from '@/components/esa'
import about from '@/components/about'
import spaceports from '@/components/spaceports'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nasa',
      name: 'nasa',
      component: nasa
    },
    {
      path: '/spacex',
      name: 'spacex',
      component: spacex
    },
    {
      path: '/isro',
      name: 'isro',
      component: isro
    },
    {
      path: '/roscosmos',
      name: 'roscosmos',
      component: roscosmos
    },
    {
      path: '/esa',
      name: 'esa',
      component: esa
    },
    {
      path: '/spaceports',
      name: 'spaceports',
      component: spaceports
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
