<template>
<nav class="navbar">
  <div class="header text-white text-center">
    <h5 class="text-center">Janabahal</h5>
    <h1 class="text-white text-center">
     Newa Documents
    </h1>
  </div>
    <button class="btn">Take a Tour</button>
</nav>
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
 .navbar{
    background-image: v-bind(background);
    background-color: rgb(160, 153, 153);
    background-blend-mode: multiply;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  .header{
    padding: 300px 0;
    margin: 0 auto;
   h1{
     font-size: 5rem;
   }
  }
  .btn{
    position: absolute;
    background-color: #4b39b5;
    bottom: 50px;
    left: 50%;
    transform: translatex(-50%);
    color: aliceblue;
    padding-inline: 30px;
  }
 }
</style>