import { createRouter, createWebHashHistory } from "vue-router";
import { store } from "../store/index.js";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/RegisterPage.vue"),
  },
  {
    name: "NewBookmark",
    path: "/new-bookmark",
    component: () => import("@/views/NewBookmark.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const _isAuthenticated = store?.getters?._isAuthenticated;
  const authRequiredRoutes = ["HomePage"];
  const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) {
    next(false)
  }

  if (authRequiredRoutes.indexOf(to.name) > -1 && !_isAuthenticated) {
    next(false)
  }
  next(true);
});

export { router };
