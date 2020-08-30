import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Details from "./views/Details.vue";
const history = createWebHistory();
const routes = [
  { path: "/", component: Home },
  {
    path: "/details/:eventID",
    component: Details,
    name: "details",
    props: true,
  },
];
const router = createRouter({ history, routes });
export default router;
