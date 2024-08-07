import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
    {
        path:'/',       //首頁
        redirect:'/index',    //重定向
    },
    {
        path:'/index',       //首頁
        name:'index',    //名字
        component: () => import('../views/index/index.vue')
    },
    {
        path:'/house',       //全屋設計
        name:'house',    //名字
        component: () => import('../views/house/index.vue')
    },
    {
        path:'/kitchen',       //廚房設計
        name:'kitchen',    //名字
        component: () => import('../views/kitchen/index.vue')
    },
    {
        path:'/collocation',       //家居搭配
        name:'collocation',    //名字
        component: () => import('../views/collocation/index.vue')
    },
    {
        path:'/case',       //設計案件
        name:'case',    //名字
        component: () => import('../views/case/index.vue')
    },
    {
        path:'/about',       //關於我們
        name:'about',    //名字
        component: () => import('../views/about/index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(), // 設置使用 hash 模式
    routes,  //routes:routes 鍵值一樣
})

export default router;  //導出