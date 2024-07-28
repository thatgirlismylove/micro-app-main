import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../pages/home.vue')
    },
    {
        path: '/test',
        component: () => import('../pages/test.vue')
    }
]

const router = createRouter(
    {
        routes: routes,
        history: createWebHashHistory()
    }
)

export default router