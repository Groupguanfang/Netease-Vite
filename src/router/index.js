import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: { title: "首页" },
    component: () => import("@/views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: "/",
  routes,
});

export default router;
