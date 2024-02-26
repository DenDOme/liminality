import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../views/homePage.vue';
import aboutPage from '../views/aboutPage.vue';
import wikiPage from '../views/wikiPage.vue';
import eventsPage from '../views/eventsPage.vue';
import detailPage from '../views/detailPage.vue';

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
  {
    path: '/events/:id',
    name: 'event-detail',
    component: detailPage,
  },
  {
    path: '/wiki/levels/:id',
    name: 'level-detail',
    component: detailPage,
  },
  {
    path: '/wiki/mobs/:id',
    name: 'mob-detail',
    component: detailPage,
  },
  {
    path: '/wiki/objects/:id',
    name: 'object-detail',
    component: detailPage,
  },
  {
    path: '/wiki/groups/:id',
    name: 'group-detail',
    component: detailPage,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
