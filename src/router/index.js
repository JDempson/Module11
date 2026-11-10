import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import QuotesView from '../views/QuotesView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  { path: '/', redirect: '/about' }, 
  { path: '/about', name: 'about', component: AboutView },
  { path: '/quotes', name: 'quotes', component: QuotesView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router