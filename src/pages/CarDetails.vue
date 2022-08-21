<template>
  <div class="car-details">
    <h1 class="title" v-if="this.car.Name">{{ this.car.Name }}</h1>
    <router-link to="/">&lt&lt&nbsp Go back Home</router-link>
  </div>
  <main>{{ getCar($route.params.id) }}
    <h2 class="name-car" v-if="this.car.Name">{{ this.car.Name }}</h2>
    <div class="origin">Design from <span>{{this.car.Origin}}</span> in <span v-if="this.car.Year">{{getYear(this.car.Year)}}</span></div>
    <img src="./../assets/images/car-example.png" alt="car example">
    <div class="more">
      <div class="power">
        <h3>Power :</h3>
        <div>
          <div v-if="this.car.Horsepower">
            {{this.car.Horsepower}} horsepower for 
          </div>
          <div v-if="this.car.Cylinders">
            {{this.car.Cylinders}} cylinders
          </div>
        </div>
      </div>
      <div class="details">
        <h3>Details : </h3>
        <div v-if="this.car.Acceleration">0-100km/h in {{this.car.Acceleration}}s</div>
        <div v-if="this.car.Miles_per_Gallon">{{this.car.Miles_per_Gallon}} Miles per Gallon</div>
        <div v-if="this.car.Displacement">Displacement : {{this.car.Displacement}} Cc</div>
        <div v-if="this.car.Weight_in_lbs">Weight : {{this.car.Weight_in_lbs}}lbs</div>
      </div>
    </div>
    <hr>
    <h3>Description & History</h3>
    <div class="descript">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe similique ipsum reiciendis maiores eum consequuntur aspernatur eos dolore alias quae, dolor voluptas aut at magni rerum quaerat officia minima fuga.
      Exercitationem debitis beatae ad magni quia incidunt obcaecati sint, sapiente veritatis hic nobis voluptate. Error suscipit numquam blanditiis ex quia eius voluptatum, placeat itaque dolores ea perferendis earum pariatur eveniet.
      Reiciendis enim quas repellendus iure quo, deleniti, placeat illo eum, consequuntur aliquam labore fugiat amet aspernatur harum ipsum eligendi neque error. Accusantium mollitia veritatis similique perferendis commodi quaerat. Consequatur, assumenda?
      Exercitationem vitae nostrum nesciunt quia tempora accusantium, alias error qui atque ab dolor debitis iste saepe inventore dicta sint optio incidunt voluptatum magni numquam. Officia vitae neque quisquam veritatis. Sit?
    </div>
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
      },
      getYear(date) {
        return date.substring(0,4);
      }
    }
  };
</script>

<style>
  main {
    text-align: center;
  }
  .title{
    text-transform: uppercase;
    font-size: 2.7rem;
    margin-bottom: 10px;
  }
  .name-car{
    text-align: center;
    font-size: 1.7rem;
    font-weight: bold;
  }
  .name-car::first-letter{
    text-transform: uppercase;
  }
  span {
    font-weight: bolder;
  }
  a{
    border-bottom: transparent 1px;
  }
  a:hover {
    border-bottom: solid 1px;
  }
  .origin{
    margin-bottom: 30px;
    font-style: italic;
  }
  img{
    max-width: 600px ;
    height: 100%;
    object-fit: cover;
  }
  .more {
    max-width: 650px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
  }
  .power>div, .details>div {
    font-size: 1.2rem;
    }
  h3{
    font-size: 1.5rem;
    font-weight: bold;
  }
  hr {
    max-width: 500px;
    margin: 20px  auto;
  }
  .descript {
    max-width: 1000px;
    margin: auto;
  }
  @media (max-width: 400px) {
    .more{
      flex-direction: column;
      margin-top: 10px;
    }
  }
</style>