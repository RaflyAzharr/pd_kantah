<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script setup>
import Nav from "./components/Login/Nav.vue";
import Login from "./components/Login/Login.vue";
import Footer from "./components/Login/Footer.vue";
import { supabase } from "./supabase";
</script>

<style>
.form-control-search {
  display: block;
  width: 80%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.footer-bawah {
  width: 100%;
  height: 50px;
  line-height: 15px;
}
.nav-color {
  background-color: #5a738e;
}
</style>
