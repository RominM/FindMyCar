<template>
  <div class="car-details">
    <h1>Car details</h1>
    <router-link to="/">Go back Home</router-link>
  </div>
  <main>
    <h2 class="name-car">{{ $route.params.id.toUpperCase() }}</h2>
    <div>{{ car }}</div>
  </main>
</template>

<script>
  export default {
    props: {
      cars: Object,
    },
    getCar() {
      return cars.find(car => car.Name === this.url_data);
    },
    mounted(){
      this.url_data=this.$route.params.id;
    },
    data(){
      return{
        url_data: null
      };
    }
  };
</script>

<style>
  .name-car{
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
  }
</style>