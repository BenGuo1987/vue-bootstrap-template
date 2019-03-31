import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
const HelloWorld = () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld');

const Carouser = () => import(/* webpackChunkName: "Carouser" */ '@/components/Carouser');
// import Carouser from '@/components/Carouser';

const CarouserDetail = () => import(/* webpackChunkName: "CarouserDetail" */ '@/components/CarouserDetail');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        nokeepalive: true
      }
    }, {
      path: '/carouser',
      component: Carouser,
      children: [
        {
          path: '/detail',
          component: CarouserDetail
        }
      ]
    }, {
      path: '/carouser-detail',
      component: CarouserDetail
    }
  ]
});
