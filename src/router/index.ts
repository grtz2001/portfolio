import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Work' },
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('../views/ResearchView.vue'),
    meta: {
      title: 'Research',
      footer: 'Happy to share papers, code, or talk through any of this in more depth.',
    },
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/EducationView.vue'),
    meta: { title: 'Education' },
  },
  {
    path: '/olympiad',
    name: 'olympiad',
    component: () => import('../views/OlympiadView.vue'),
    meta: {
      title: 'Olympiad',
      footer: 'Always glad to talk problem design, coaching, or running a competition.',
    },
  },
  // Unknown paths fall back to Home.
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

const BASE_TITLE = 'Maria Gratzia Indacochea'
router.afterEach((to) => {
  const section = to.meta.title as string | undefined
  document.title = section ? `${section} · ${BASE_TITLE}` : BASE_TITLE
})

export default router
