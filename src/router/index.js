import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../views/homePage.vue';
import aboutPage from '../views/aboutPage.vue';
import wikiPage from '../views/wikiPage.vue';
import eventsPage from '../views/eventsPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage,
  },
  {
    path: '/about',
    name: 'about',
    component: aboutPage,
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: wikiPage,
  },
  {
    path: '/events',
    name: 'events',
    component: eventsPage,
  },
  // {
  //   path: '/events/:id',
  //   name: 'event-detail',
  //   component: eventDetailPage,
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
