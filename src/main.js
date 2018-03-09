import Vue from 'vue';
import { Header, Swipe, SwipeItem, Button,Lazyload } from 'mint-ui';
import  './libs/mui/css/mui.css';
import  './libs/mui/css/icons-extra.css';
import VueResource from 'vue-resource';
import moment from 'moment';
import VuePreview from 'vue-preview';

import app from './App.vue';
import router from './router.js';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.use(VueResource);
Vue.use(Lazyload);
Vue.use(VuePreview);

Vue.filter('dataF',function(info,option="YYYY-MM-DD"){
    return moment(info).format(option);
})

Vue.http.options.root ="http://vue.studyit.io";
// 设置ajax请求的路径前缀
Vue.http.options.emulateJSON = true; //设置post请求为表单方式期缴

var vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(app);
    },
    router

});