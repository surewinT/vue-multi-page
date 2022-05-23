/*
 * @Date: 2022-05-19 10:53:10
 * @Author: surewinT 840325271@qq.com
 * @LastEditTime: 2022-05-23 00:01:53
 * @LastEditors: surewinT 840325271@qq.com
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: '/404',
  component: () => import('@srcview/view/404.vue'),
},
{
  label: "组件1",
  path: "/comshow1",
  name: "comshow1",
  component: () => import('@srcview/view/test1'),
},
{
  label: "组件1",
  path: "/comshow2",
  name: "comshow2",
  component: () => import('@srcview/view/test2'),
},


];

const router = new VueRouter({
  routes
});


export {
  router,
  routes
};