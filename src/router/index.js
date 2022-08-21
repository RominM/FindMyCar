import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import CarDetails from '@/pages/CarDetails.vue';
import Error from '@/pages/Error.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
    name: Home,
    path: '/',
    component: Home
    },
    {
    name: CarDetails,
    path: '/car-details/:id',
    component: CarDetails
    },
    {
    name: Error,
    path: '/:pathMatch(.*)*',
    component: Error
    }
  ]
});

export default router