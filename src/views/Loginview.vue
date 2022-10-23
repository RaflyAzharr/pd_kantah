<template>
  <div>
    <section>
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h1>Login Internal ATR/BPN</h1>
            <p class="text-secondary">Silahkan masuk untuk memulai aplikasi</p>

            <form @submit.prevent="masuk">
              <!-- Id input -->
              <div class="form-outline mb-4">
                <input v-model="email" type="email" class="form-control form-control-lg" placeholder="Email" />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <input v-model="password" type="password" id="form3Example4" class="form-control form-control-lg" placeholder="Masukkan Kata sandi" />
              </div>

              <button type="submit" class="btn btn-primary btn-lg">Masuk</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import router from '../router'

const email = ref("");
const password = ref("");

const masuk = async () => {
  try {
    const { data, error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value,
    });

    if (data) {
      router.push({ path: "/dashboard" });
    }
  } catch(error) {
    console.error(error)
  } finally {
    // 
  }
};
</script>
