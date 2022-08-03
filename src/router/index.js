import { createRouter, createWebHistory  } from 'vue-router'
import TheHomePage from '../views/TheHomePage.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'TheHomePage',
      component: TheHomePage
    },
    {
      path: '/about',
      // name: 'AboutView',
      // component: () => import('../views/AboutView.vue')
      name: 'TheTeamPage',
      component: () => import('../views/TheTeamPage.vue')
    },
    {
      path: '/login',
      name: 'MyLoginPage',
      component: () => import('../views/MyLoginPage.vue')
    },
    {
      path: '/register',
      name: 'MyRegisterPage',
      component: () => import('../views/MyRegisterPage.vue')
    },
    {
      path: '/men',
      name: 'TheMenPage',
      component: () => import('../views/TheMenPage.vue')
    },
    {
      path: '/women',
      name: 'TheWomenPage',
      component: () => import('../views/TheWomenPage.vue')
    },
    {
      path: '/unisex',
      name: 'TheUnisexPage',
      component: () => import('../views/TheUnisexPage.vue')
    },
    {
      path: '/add',
      name: 'AdminAdd',
      component: () => import('../views/AdminAdd.vue')
    },
    {
      path: '/contact',
      name: 'TheContactPage',
      component: () => import('../views/TheContactPage.vue')
    },
    {
      name:"PageNotFound",
      path:"/:pathMatch(.*)*",
      component: () => import('../views/PageNotFound.vue')
  },
  {
    path: '/shoe/:id',
    name: 'AdminShoeById',
    component: () => import('../views/AdminShoeById.vue')
  },
    {
      path: '/edit/:id',
      name: 'AdminEdit',
      component: () => import('../views/AdminEdit.vue')
    },
    {
      path: '/admin',
      name: 'AdminView',
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
