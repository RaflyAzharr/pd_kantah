import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("@/views/Loginview.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/Dashboardview.vue"),
    },
    {
      path: "/peminjamanberkas",
      name: "peminjamanberkas",
      component: () => import("@/views/PeminjamanBerkasview.vue"),
    },
   {
      path: "/entridatapeminjaman",
      name: "entridatapeminjaman",
      component: () => import("@/views/EntriDataPeminjamanview.vue"),
    },
    {
      path: "/berkastidakditemukan",
      name: "berkastidakditemukan",
      component: () => import("@/views/BerkasTidakDitemukanview.vue"),
    },
    {
      path: "/entridatatidakditemukan",
      name: "entridatatidakditemukan",
      component: () => import("@/views/EntriDataTidakDitemukanview.vue"),
    },
    {
      path: "/pengaturanakun",
      name: "pengaturanakun",
      component: () => import("@/views/PengaturanAkunview.vue"),
    },

    {
      path: "/reg",
      name: "reg",
      component: () => import("@/views/Registrasi.vue"),
    },
  ],
});

export default router;
