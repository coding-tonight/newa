<template>
<div>
  <section class="container my-5">
    <h3 class="mb-3 fw-bold">Our Facilities</h3>
    <div  class="wrapper d-flex justify-content-around">
      <div
      v-for="(facilite , index) in facilites"
      :key="index"
      class="card"
      >
       <img 
        :src="facilite.image" 
        alt="images"
        class="card-img-top"
      >
        <div class="card-body">
          <h3>{{ facilite.name }}</h3>
         <P>{{ facilite.description }}</P>
        </div>
      </div>
    </div>
  </section>

  <section class="Subscription container my-5">
    <h3 class="">Subscription</h3>
     <p>Lorem, ipsum dolor sit amet consecte!</p>
    <div class="container d-flex justify-content-between">
      <div 
      v-for="(packages ,index) in Subscription"
      :key="index"
      class="card"
      style="width: 22rem; height: 500px;"
      >
       <div class="card-body">
        {{ packages.name }}
       </div>
     </div>
    </div>
  </section>
  <section class="background"
  >
  </section>
</div>
</template>

<script>
 import { ref } from 'vue'

  export default{
    setup(){
        const background = ref('url("/storage/Homepage/backgroundfooter.jpg")')
        const facilites = [
            {
              name: 'Newar Traditional Motifs and Designs',
              image: '/storage/Homepage/Facilities/newa1.jpg',
              description: 'Use this section to talk about the characteristics of each of the listed items.'
            },
            {
              name: 'Newar Lok-katha Sangalo',
              image: '/storage/Homepage/Facilities/newa2.jpg',
              description: 'Use this section to talk about the characteristics of each of the listed items.'
            },
            {
              name: 'Newah Vijnana',
              image: '/storage/Homepage/Facilities/newa3.jpg',
              description: 'Use this section to talk about the characteristics of each of the listed items.'
            }
        ]
        const Subscription = [
           {
            name: 'basic'
           },
          {
            name: 'siliver'
          },
          {
            name: 'gold'
          }
        ]
     return{
       facilites,
       Subscription,
       background
     }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
     color: #4b39b5;
   .wrapper{
    .card{
      width: 18rem;
      img{
        height: 400px;
        object-fit: cover;
      }
    }
   }
  }
  .background{
    background-image: v-bind(background);
    background-size: cover;
    background-attachment:  fixed;
    width: 100%;
    height: 400px;
   }
</style>