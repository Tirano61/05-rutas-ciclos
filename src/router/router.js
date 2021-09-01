import { createRouter, createWebHashHistory } from "vue-router";

import isAuthenticationGuard from "./auth-guard";

const routes = [{
        path: '/',

        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () =>
            import ( /* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [{
                path: 'home',
                name: 'pokemon-home',
                component: () =>
                    import ( /* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () =>
                    import ( /* webpackChunkName: "AbautPage" */ '../modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id',
                name: "pokemon-id",
                component: () =>
                    import ( /* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
                props: (route) => {

                    const id = Number(route.params.id)

                    return isNaN(id) ? { id: 1 } : { id: id }

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
        beforeEnter: [isAuthenticationGuard],
        component: () =>
            import ( /* webpackChunkName: "DbzLayout" */ '@/modules/dbz/layouts/DagonBallLayout'),
        children: [{
                path: 'characters',
                name: 'dbz-characters',
                component: () =>
                    import ( /* webpackChunkName: "dbz-characters" */ '@/modules/dbz/pages/Characters')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () =>
                    import ( /* webpackChunkName: "dbz-abou" */ '@/modules/dbz/pages/About')
            },

            {
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]
    },


    {
        path: '/:pathMatch(.*)*',
        component: () =>
            import ( /* webpackChunkName "NoPagesFound" */ '@/modules/shared/pages/NoPagesFound')

    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


//Guard Global sincrono (Pueba)
// router.beforeEach((to, from, next) => {

//     console.log({ to, from, next });
// const random = Math.random() * 100
// console.log(random);
// if (random > 50) {
//     console.log('Autenticado');
//     next()
// } else {
//     console.log(random, 'Bloqueado por el beforEach guard');
//     next({ name: 'pokemon-home' })
// }

// })

// Guard Global asincrono 

// const canAccess = () => {
//     return new Promise(resolve => {
//         const random = Math.random() * 100
//         console.log(random);
//         if (random > 50) {
//             console.log('Autenticado CanAccess');
//             resolve(true)
//         } else {
//             console.log(random, 'Bloqueado por el beforEach guard - CanAccess');
//             resolve(false)
//         }
//     })
// }

// router.beforeEach(async(to, from, next) => {

//     const authorized = await canAccess()
//     authorized ? next() : next({ name: 'pokemon-home' })
// })

export default router;