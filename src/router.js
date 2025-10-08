// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Importaciones DIRECTAS y explícitas
import VIfElse from './views/VIfElse.vue';
import VShow from './views/VShow.vue';
import VFor from './views/VFor.vue';
import VBindKey from './views/VBindKey.vue';

const routes = [
  { 
    path: '/', 
    redirect: '/v-if' 
  },
  { 
    path: '/v-if', 
    name: 'VIfElse',
    component: VIfElse 
  },
  { 
    path: '/v-show', 
    name: 'VShow',
    component: VShow 
  },
  { 
    path: '/v-for', 
    name: 'VFor',
    component: VFor 
  },
  { 
    path: '/v-bind-key', 
    name: 'VBindKey',
    component: VBindKey 
  }
];

// Crear el router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;