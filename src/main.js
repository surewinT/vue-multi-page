/*
 * @Date: 2022-05-17 15:59:52
 * @Author: surewinT 840325271@qq.com
 * @LastEditTime: 2022-05-23 00:16:06
 * @LastEditors: surewinT 840325271@qq.com
 * @Description: 主界面工程
 */
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import { router } from "./router";

import './styles/public.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')