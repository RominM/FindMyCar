<script>
  import Card from "../components/Card.vue";
  import Sorted from "../components/Sorted.vue";
  export default {
  components: {
      Card,
      Sorted
    },
    props: {
      cars: Object,
    }
  };
</script>

<template>
  <div class="home">
      <h1>Welcome to our Garage</h1>
      <h2>Find your car</h2>
      <Sorted :cars="cars"/>
      <main class="cars">
      <Card :cars="cars"/>
      </main>
    <!-- </div> -->
  </div>
</template>

<style>
.home {
  width: 90%;
  margin: auto;
}
  h1 {
    border-bottom: solid 2px;
  }
  img {
    opacity: .5;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
  .content{
  margin: 0 auto;
  padding: 2rem;
  overflow: hidden;
  }  
  @media (max-width: 400px) {
    main{
      margin-top: 0px;
    }
  }
</style>