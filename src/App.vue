<script>
import Nav from "./components/Nav.vue";
import Login from "./components/Login.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Nav,

    Footer,
  },
};
</script>

<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<style>
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
