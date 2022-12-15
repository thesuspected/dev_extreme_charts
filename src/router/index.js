import Vue from 'vue'
import VueRouter from 'vue-router'
import ChartsPage from '@/views/ChartsPage'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: ChartsPage,
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router
