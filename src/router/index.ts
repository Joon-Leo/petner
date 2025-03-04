import { createRouter, createWebHistory } from 'vue-router';
import PATH from '@/constants/path';
import ADOPTION_ROUTES from './route/AdoptionRoutes';
import AUTH_ROUTES from './route/AuthRoutes';
import TRAVEL_ROUTES from './route/TravelRoutes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PATH.root,
      name: 'home',
      component: () => import('@/views/HomeMain.vue'),
      meta: { headerVariant: 'header-transparent' },
    },
    ...AUTH_ROUTES,
    ...TRAVEL_ROUTES,
    ...ADOPTION_ROUTES,
  ],
});

export default router;
