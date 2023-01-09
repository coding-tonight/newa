<template>
<section class="navbar-container">
<div class="container-fluid">
  <nav class="navbar  justify-content-between">
     <router-link to="/" class="navbar-brand text-white">Newa Documents</router-link>
    <form class="d-flex w-50">
      <input class="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-primary my-2 my-sm-0 d-inline" type="submit">Search</button>
    </form>
  </nav>
 </div>
  <div class="container  d-flex align-items-center justify-content-between bg-dark text-white">
    <div class="dropdown">
      <Font-icon icon="filter" />
      categories
    </div>
     <ul class="d-flex align-items-center gap-4 align-items-center justify-content-center  position-relative" style="top: 10px;">
       <li class="nav-link">About</li>
       <li class="nav-link">Contact</li>
       <li class="nav-link">lastest</li>
     </ul>
  </div>
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

<style lang="scss">
 .navbar-container{
   .container-fluid{
    background-color: #31525B;
   }
 }
</style>