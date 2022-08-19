<template>
  <div class="car-details">
    <h1>Car details</h1>
    <router-link to="/">&lt&lt&nbsp Go back Home</router-link>
  </div>
    <main>{{ getCar($route.params.id) }}
      <div>{{this.car.Name}}</div>
      <div>{{this.car.Horsepower}}</div>
      <div>{{this.car.Acceleration}}</div>
    </main>
</template>

<script>
  export default {
    props: {
      cars: Object,
    },
    data(){
      return {
        car:{},
      };
    },
    methods: {
      getCar(name) {
        const infoCar = this.cars.forEach((car) => {
          car.Name === name && (this.car = car);
        });
        return infoCar
      }
    }
  };
</script>

<style>
  .name-car{
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
  }
  a{
    border-bottom: transparent 1px;
  }
  a:hover {
    border-bottom: solid 1px;
  }
</style>