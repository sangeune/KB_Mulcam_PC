import { createRouter, createWebHistory } from 'vue-router'
import IntroPage from '@/views/IntroPage.vue'
import BusinessPage from '@/views/BusinessPage.vue'
import HomePage from '@/views/HomePage.vue'
import SponsorPage from '@/views/SponsorPage.vue'
import NewsPage from '@/views/NewsPage.vue'
import AboutPage from '@/views/subpage/AboutPage.vue'
import TransManagement from '@/views/subpage/TransManagement.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/intro',
    name: 'intro',
    component: IntroPage,
    children: [
      { path: 'about', name: 'about', component: AboutPage },
      { path: 'transManagement', name: 'transManagement', component: TransManagement },
    ],
  },
  // {
  //   path: '/intro/about',
  //   name: 'about',
  //   component: AboutPage,
  // },
  {
    path: '/business',
    name: 'business',
    component: BusinessPage,
  },
  {
    path: '/sponsor',
    name: 'Sponsor',
    component: SponsorPage,
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage,
  },
  {
    path: '/:paths(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
