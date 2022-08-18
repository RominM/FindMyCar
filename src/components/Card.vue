<template>
  <ul class="cars-list">
    <div v-for="(car, Index) in cars" :key="Index">
      <router-link :to="`/car-details/${car.Name}`" class="car">  
        <li title="Click for more details">
          {{car.Name}}
        </li>
      </router-link>
    </div>
  </ul>
</template>

<script>
  export default {
    props: {
      cars: Object,
    }
  };
</script>

<style>
  ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 50px;
  }

  li{
    min-width: 300px;
    max-width: 350px;
    min-height: 100px;
    margin: 25px auto;
    border: solid;
    border-radius: 10px;
    list-style: none;
    box-shadow: 3px 3px 10px;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
    transition: .1s;
  }
  li:hover {
    transform: scale(1.07);
    background-color: hsla(160, 100%, 37%, 0.2);
  }

  @media (max-width: 780px) {
    ul {
      display: block;
    }
    li {
      min-width: 215px;
    }
  }
    @media (max-width: 400px) {
    ul{
      padding-top: 0px;
    }
  }
</style>