<template>
  <div class="mb-3">
    <nav class="navbar navbar-expand-lg navbar-light nav-color">
      <div class="container container-fluid">
        <a class="navbar-brand text-white"><img src="../../assets/logo1.png" alt="Vue logo" width="32px" height="32px" class="d-inline-block align-text-top" /> PD KANTAH</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page" href="/dashboard"><i class="bi bi-house-door-fill"></i> Beranda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="/pengaturanakun"><i class="bi bi-person-lines-fill"></i> Pengaturan Akun</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-danger" aria-current="page" @click="keluar"><i class="bi bi-box-arrow-left"></i> Keluar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { supabase } from "../../supabase";
import router from "../../router";

const keluar = async () => {
  const { error } = await supabase.auth.signOut();
  router.push({ path: "/" });
};


</script>
