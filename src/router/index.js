import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";
Vue.use(Router);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackPrefetch: true */ "../components/Login.vue"),
    },
    {
        path: '/admin',
        component: () => import("../components/admin/Cms.vue"),
        children: [
            {
                path: '/admin/dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "admin-side" */ "../components/admin/Dashboard.vue"),
            },
            {
                path: '/admin/addCategories',
                name: 'addCategories',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "admin-side" */ "../components/admin/AddCategories2.vue"),
            },
            {
                path: '/admin/postArticle',
                name: 'PostArticle',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "admin-side" */ "../components/admin/PostArticle.vue"),
            },
            {
                path: '/admin/listArticle',
                name: 'ListArticle',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "admin-side" */ "../components/admin/ListArticle.vue"),
            },
            {
                path: '/admin/listCategories',
                name: 'ListCategories',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "admin-side" */ "../components/admin/ListCategories.vue"),
            },
            {
                path: '/admin/listUser',
                name: 'ListUser',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "admin-side" */ "../components/admin/ListUser.vue"),
            },
            {
                path: '/admin/addAdmin',
                name: 'AddAdmin',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "admin-side" */ "../components/admin/AddAdmin.vue"),
            },
            {
                path: '/admin/news/:id',
                name: 'news-details',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "admin-side" */ "../components/admin/EditArticle.vue"),
            },
        ]
    },

    {
        path: '/',
        component: () => import(/* webpackPrefetch: true */ "../components/user/NavBar.vue"),
        children: [
            {
                path: '/',
                name: 'news-list',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "user-side" */ "../components/user/LandingPage.vue"),
            },
            {
                path: '/news',
                name: 'news-list',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "user-side" */ "../components/user/LandingPage.vue"),
            },
            {
                path: '/news/id/:id',
                name: 'News',
                component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "user-side" */ "../components/user/News.vue"),
            },
            {
                path: '/newsList/:category',
                name: 'NewsList',
                component: () => import/* webpackPrefetch: true */ /* webpackChunkName: "user-side" */ ("../components/user/NewsList.vue"),
            },
        ]
    }

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
/*export default new Router({
    mode: "history",
    routes: [
        {
        path: "/",
        alias: "/news",
        name: "news",
        component: () => import("./components/NewsList")
        },
        {
        path: "/news/:id",
        name: "news-details",
        component: () => import("./components/News")
        },
        // {
        // path: "/add",
        // name: "add",
        // component: () => import("./components/AddTutorial")
        // }
    ]
});*/
