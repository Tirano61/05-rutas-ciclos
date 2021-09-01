
import { createRouter, createWebHashHistory } from "vue-router";

import NoPagesFound from '../modules/shared/pages/NoPagesFound';

const routes = [
    {
        path: '/',
       
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage') 
            },
            { 
                path: 'about', 
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AbautPage" */ '../modules/pokemon/pages/AboutPage') 
            },
            { 
                path: 'pokemonid/:id', 
                name: "pokemon-id",
                component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
                props: ( route ) =>{
                   
                    const id = Number(route.params.id)
                    
                    return isNaN( id ) ? { id: 1 } : { id: id }
                    
                } 
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            }
        ]
    },


    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DbzLayout" */ '@/modules/dbz/layouts/DagonBallLayout'),
        children: [
            { 
                path: 'characters', 
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "dbz-characters" */ '@/modules/dbz/pages/Characters') 
            },
            { 
                path: 'about', 
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "dbz-abou" */ '@/modules/dbz/pages/About') 
            },

            {
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]
    },


    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName "NoPagesFound" */'@/modules/shared/pages/NoPagesFound') 
        
    },
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router;