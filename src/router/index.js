import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from 'pages/Index'
import Detail from "pages/Detail";
import Write from "pages/Write";
import Login from "pages/Login";
import Search from 'pages/search/Search'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },

    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },

    {
        path : '/search',
        name : 'search',
        component : Search,
    },

    {
        path : '/compose',
        name : 'write',
        component : Write,
    },

    {
        path : '/login',
        name : 'login',
        component : Login
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router