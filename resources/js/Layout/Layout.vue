<template>
 <div class="Layout">
    <Navbar />
  
  <div class="content">
    <router-view></router-view>
  </div>
  
   <!-- <Footer /> -->
 </div>
</template>

<script>
 import Navbar from './Navbar.vue'
 import Footer from './Footer.vue'

 export default{
   components:{
    Navbar,
    Footer
   },
   setup(){

   }
 }
</script>

<style lang="scss">
.content{
  margin-bottom:  10rem;
}
  
</style>