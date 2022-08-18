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
  </div>
</template>

<style>
  h1 {
    border-bottom: solid 2px;
    margin-bottom: 25px;
  }
  @media (max-width: 400px) {
    main{
      margin-top: 0px;
    }
  }
</style>