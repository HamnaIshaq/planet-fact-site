import { createRouter, createWebHistory } from "vue-router";
import Mercury from "../views/Mercury.vue";
import Venus from "../views/Venus.vue";
import Earth from "../views/Earth.vue";
import Mars from "../views/Mars.vue";
import Jupiter from "../views/Jupiter.vue";
import Saturn from "../views/Saturn.vue";
import Uranus from "../views/Uranus.vue";
import Neptune from "../views/Neptune.vue";

const routes = [
  {
    path: "/mercury",
    name: "mercury",
    component: Mercury,
  },
  {
    path: "/venus",
    name: "venus",
    component: Venus,
  },
  {
    path: "/earth",
    name: "earth",
    component: Earth,
  },
  {
    path: "/mars",
    name: "mars",
    component: Mars,
  },
  {
    path: "/jupiter",
    name: "jupiter",
    component: Jupiter,
  },
  {
    path: "/saturn",
    name: "saturn",
    component: Saturn,
  },
  {
    path: "/uranus",
    name: "uranus",
    component: Uranus,
  },
  {
    path: "/neptune",
    name: "neptune",
    component: Neptune,
  },
  {
    path: "/",
    redirect: { name: "earth" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  linkExactActiveClass: "flex-header__nav--ul-li-link--active",
});

export default router;
