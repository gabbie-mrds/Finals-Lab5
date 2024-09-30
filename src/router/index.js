import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import blog from '@/components/blog'
import gallery from '@/components/gallery'
import about from '@/components/about'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/blog",
      name:  "blog",
      component: blog
    },
    {
      path: "/gallery",
      name:  "gallery",
      component: gallery
    },
    {
      path: "/about",
      name:  "about",
      component: about
    },
    {
      path: "/contact",
      name:  "contact",
      component: contact
    }
  ]
})
