import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "首页" },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/search",
    name: "search",
    meta: { title: "搜索" },
    component: () => import("@/views/Search.vue"),
  },
  {
    path: "/list/:id",
    name: "list",
    meta: { title: "详情" },
    component: () => import("@/views/List.vue"),
  },
  {
    path: "/user/:id",
    name: "user",
    meta: { title: "用户" },
    component: () => import("@/views/User.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: "/",
  routes,
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
