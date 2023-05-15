import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./HomeView.vue";
import GalleryView from "./GalleryView.vue";
import ActivitiesView from "./ActivitiesView.vue";
import LoadBalancer from "./components/blog/LoadBalancer.vue";

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/career",
    component: HomeView,
    name: "career",
    text: "Career",
  },
  {
    path: "/portfolio",
    component: GalleryView,
    name: "portfolio",
    text: "Portfolio",
  },
  {
    path: "/blog",
    component: ActivitiesView,
    name: "blog",
    text: "Blog",
  },
  {
    path: "/blog/load_balancer",
    component: LoadBalancer,
    name: "blog/load_balancer",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { router, routes };
