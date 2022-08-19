import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CarDetails from '@/views/CarDetails.vue';
import Error from '@/views/Error.vue';

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