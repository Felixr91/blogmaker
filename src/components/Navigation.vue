<template>

  <!-- Navbar Large -->
  <div class="nav-large">
    <div class="row nav-row bg-light container-fluid d-flex justify-content-around align-items-center"
      style="margin: 0px;">
      <div class="col-2 d-flex justify-content-between nav-left">
        <span class="nav-text" @click="goHome()">Home</span>

      </div>
      <div class="col-m-6 nav-center">
        <span class="font-standard">Felix</span><span class="font-extra-bold">Ramirez</span>
      </div>
      <div class="col-2 d-flex justify-content-between nav-right">
        <span class="nav-text" @click="goBlog()">Blog</span>
      </div>
      <div class="col-2 d-flex justify-content-between nav-right">
        <span class="nav-text" @click="goDashboard()">Dashboard</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {

      }
    },
    computed: {},
    methods: {

      goBlog() {
        this.$store.dispatch("goBlog");
      },
      goHome() {
        this.$store.dispatch("goHome");
      },
      goDashboard() {
        this.$store.dispatch("goDashboard");
      }
    }
  }

</script>

<style>

</style>