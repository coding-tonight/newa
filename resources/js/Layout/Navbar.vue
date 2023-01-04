<template>
<section class="container-fluid navbar-container">
  <nav class="navbar  justify-content-between">
     <router-link to="/" class="navbar-brand text-white">Newa Documents</router-link>
    <form class="d-flex">
      <input class="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search">
      <!-- <button class="btn btn-outline-light my-2 my-sm-0 d-inline" type="submit">Search</button> -->
    </form>
  </nav>
</section>
</template>

<script>
 import { ref } from 'vue'
  export default{
   setup(){
    const background = ref('url("/storage/Homepage/background.jpg")');
    return{
      background
    }
   }
  }
</script>

<style lang="scss" scoped>
 .navbar-container{
  background-color: #31525B;
 }
</style>