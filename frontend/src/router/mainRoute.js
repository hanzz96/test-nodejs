import Home from "@/views/Home";
import ProductLanding from "@/views/Product/Landing";

export const routes = {
  path: "/",
  meta: {
    requiresAuth: true,
  },
  redirect: "/",
  component: () => import("@/layouts/template/Main.vue"),
  children: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/issue/:id?",
      name: "issue",
      component: () => import("@/views/Issue/Landing.vue"),
      meta: { requiresAuth: true },
    },
  ],
};
