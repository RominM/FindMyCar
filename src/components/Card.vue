<template>
  <ul class="cars-list">
    <div v-for="(car, Index) in cars" :key="Index">
      <router-link :to="`/car-details/${car.Name}`" class="car">  
        <li title="Click for more details">
          <p>
            {{car.Name.charAt(0).toUpperCase() + car.Name.slice(1)}}
          </p>
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
    display: table;
    width: 320px;
    height: 100px;
    margin: 25px auto;
    border: solid;
    border-radius: 10px;
    list-style: none;
    box-shadow: 3px 3px 10px;
    text-align: center;
    cursor: pointer;
    transition: .1s;
  }
  li:hover {
    transform: scale(1.07);
    background-color: hsla(160, 100%, 37%, 0.2);
  }
  p{
    text-align:center; 
    vertical-align: middle;
    display: table-cell;
    max-width: 90%;
    margin: auto;
    font-size: x-large;
  }

  @media (max-width: 780px) {
    ul {
      display: block;
      padding: 0;
      margin: 0;
    }
    li {
      width: 100%;
    }
  }
    @media (max-width: 400px) {
    ul{
      padding-top: 0px;
    }
  }
</style>