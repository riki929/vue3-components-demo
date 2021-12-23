import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Container from "../components/container/src/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/iconPicker",
        component: () => import("../views/iconPicker/index.vue"),
      },
      {
        path: "/areaPicker",
        component: () => import("../views/areaPicker/index.vue"),
      },
      {
        path: "/trend",
        component: () => import("../views/trend/index.vue"),
      },
      {
        path: "/notification",
        component: () => import("../views/notification/index.vue"),
      },
      {
        path: "/menu",
        component: () => import("../views/menu/index.vue"),
      },
      {
        path: "/progress",
        component: () => import("../views/progress/index.vue"),
      },
      {
        path: "/timePicker",
        component: () => import("../views/timePicker/index.vue"),
      },
      {
        path: "/cityPicker",
        component: () => import("../views/cityPicker/index.vue"),
      },
      {
        path: "/form",
        component: () => import("../views/form/index.vue"),
      },
      {
        path: "/modalForm",
        component: () => import("../views/modalForm/index.vue"),
      },
      {
        path: "/table",
        component: () => import("../views/table/index.vue"),
      },
      {
        path: "/calendar",
        component: () => import("../views/calendar/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
