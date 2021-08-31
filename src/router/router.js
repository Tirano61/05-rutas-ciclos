
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
        path: '/:id', 
        name: "pokemon-id",
        component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
        props: ( route ) =>{
           
            const id = Number(route.params.id)
            
            return isNaN( id ) ? { id: 1 } : { id: id }
            
        } 
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