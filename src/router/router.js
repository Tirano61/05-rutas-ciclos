
import { createRouter, createWebHashHistory } from "vue-router";

import NoPagesFound from '../modules/shared/pages/NoPagesFound';

const routes = [
    { 
        path: '/', 
        component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage') 
    },
    { 
        path: '/about', 
        component: () => import(/* webpackChunkName: "AbautPage" */ '../modules/pokemon/pages/AboutPage') 
    },
    { 
        path: '/id', 
        component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage') 
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: NoPagesFound 
    },
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router;