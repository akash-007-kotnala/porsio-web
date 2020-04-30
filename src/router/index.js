import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/general/about.vue")
  },
  {
    path: "/contactus",
    name: "Contact Us",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/general/contactus.vue")
  },
  {
    path: "/policies",
    name: "Polocies",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/general/policies.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/login.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
