<template>
  <ul class="cars-list">
    <li title="Click for more details" v-for="(car, Index) in cars" :key="Index">
      <router-link :to="`/car-details/${car.Name}`">  
        <div>
          <img src="./../assets/images/car-unique.png" alt="car unique example">
          <p>
            {{car.Name.charAt(0).toUpperCase() + car.Name.slice(1)}}
          </p>
        </div>
      </router-link>
    </li>
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
    width: 90%;
    padding: 50px;
    margin: auto;
  }

  li{
    display: table;
    width: 350px;
    height: 120px;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align:center; 
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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