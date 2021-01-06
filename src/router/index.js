import Vue from "vue";
import Router from "vue-router";
import Cms from '../components/admin/Cms.vue';
import AddCategories from '../components/admin/AddCategories2.vue';

import PostArticle from '../components/admin/PostArticle.vue'
import ListArticle from '../components/admin/ListArticle.vue'
import ListCategories from '../components/admin/ListCategories.vue'
import EditArticle from '../components/admin/EditArticle.vue'
import NavBar from '../components/user/NavBar.vue'
import News from '../components/user/News.vue'
import NewsList from '../components/user/NewsList.vue'
import LandingPage from '../components/user/LandingPage.vue'
import Login from '../components/Login.vue'
import VueRouter from "vue-router";
Vue.use(Router);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/admin',
        component: Cms,
        children: [
            {
                path: '/admin/addCategories',
                name: 'addCategories',
                component: AddCategories,
            },
            {
                path: '/admin/postArticle',
                name: 'PostArticle',
                component: PostArticle
            },
            {
                path: '/admin/listArticle',
                name: 'ListArticle',
                component: ListArticle
            },
            {
                path: '/admin/listCategories',
                name: 'ListCategories',
                component: ListCategories
            },
            {
                path: '/admin/news/:id',
                name: 'news-details',
                component: EditArticle
            },
        ]
    },

    {
        path: '/',
        component: NavBar,
        children: [
            {
                path: '/',
                name: 'news-list',
                component: LandingPage
            },
            {
                path: '/news',
                name: 'news-list',
                component: LandingPage
            },
            {
                path: '/news/id/:id',
                name: 'News',
                component: News
            },
            {
                path: '/newsList/:category',
                name: 'NewsList',
                component: NewsList
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
