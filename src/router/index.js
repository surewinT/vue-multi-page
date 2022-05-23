/*
 * @Date: 2022-05-19 10:53:10
 * @Author: surewinT 840325271@qq.com
 * @LastEditTime: 2022-05-22 23:58:50
 * @LastEditors: surewinT 840325271@qq.com
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
import Test1 from '@/view/test1'
import Test2 from '@/view/test2'

Vue.use(VueRouter);

const routes = [{
    label: "404",
    path: "/",
    component: Layout,
    hidden: true,
    children: [{
      path: '/404',
      component: () => import('@/view/404.vue'),
    }]
  },
  {
    label: "组件展示",
    path: "/",
    redirect: "/comshow1",
    component: Layout,
    children: [{
        label: "组件1",
        path: "comshow1",
        name: "comshow1",
        component: Test1,
      },
      {
        label: "组件2",
        path: "comshow2",
        name: "comshow2",
        component: Test2,
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },
];


const router = new VueRouter({
  routes
});


// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

export {
  router,
  routes
};