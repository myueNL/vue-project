import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './components/tabbar/Home.vue';
import user from './components/tabbar/User.vue';
import shopcar from './components/tabbar/Shopcar.vue';
import search from './components/tabbar/Search.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import share from './components/photo/share.vue';
import info from './components/photo/info.vue';
import shoplist from './components/shop/list.vue';
import shopinfo from './components/shop/info.vue';

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },                
        { path: '/home', component: home },        
        { path: '/user', component: user },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/news/newslist', component: newslist },
        { path: '/news/newsinfo/:id?', component: newsinfo },
        { path: '/photo/share', component: share },
        { path: '/photo/info/:id', component: info },
        { path: '/shop/list', component: shoplist },
        { path: '/shop/info/:id', component: shopinfo, name:'shopinfo'}                                                                                                                                                                                                                                                        
                                                             
    ],
    linkActiveClass: 'mui-active'
});

export default router;