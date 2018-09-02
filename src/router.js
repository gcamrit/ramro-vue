import Vue from "vue";
import Router from "vue-router";
import Modules from './modules';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'text-primary border-b-2 border-primary opacity-100',
});

Modules.forEach((module) => {
  router.addRoutes(module.getRoutes());
});

export default router;
