import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue')
  },
  {
    path: '/organization',
    name: 'organization',
    component: () => import('../views/Organization.vue')
  },
  {
    path: '/farm/',
    name: 'farm',
    prop: true,
    component: () => import('../views/Farm.vue')

  },
  {
    path: '/farm/node',
    name: 'node',
    prop: true,
    component: () => import('../views/Node.vue')

  },
  {
    path: '/test',
    name: 'test',
    prop: true,
    component: () => import('../views/Test.vue')

  },
  {
    path: '/home2',
    name: 'Home2',
    component: ()=>import('../views/Home2.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: ()=>import('../views/Edit.vue')
  },

  {
    path: '/farmtest/',
    name:'farmtest',
    component :()=>import('../views/Farmtest.vue'),
    props:true

  }
,
  {
      path:'/overviewstest',
      name:'overviewstest',
      component:()=>import('../views/Overviewstest.vue'),


  },
  {
    path:'/pagefarmtest/:id',
    name:'pagefarmtest',
    component:()=>import('../views/pagefarmtest.vue'),
    props:true,
},

{
  path:'/pagefarmtest/:id/node/:nodeid',
  name:'testnode',
  component:()=>import('../views/Nodetest.vue'),
  props:true,

},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
