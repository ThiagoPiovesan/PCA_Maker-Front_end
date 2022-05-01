/*#======================================================#
* # + Projet: Principal Component Analysis automation    #
* # + Date:   04/2022                                    #
* # + Description: Return PCA and infos by and CSV or    #
* # XLSX that was given by user                          #
* # + Author: Thiago Piovesan                            #
* #======================================================#
* # Libs importation:
*/
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: '/home',
    name: 'Homepage',
    component: () => import("../views/Homepage.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../views/About.vue")
  },
  { path: '/', redirect: '/home' }
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router