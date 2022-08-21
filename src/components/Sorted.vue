<template>
  <div class="find">
    <label for="sorted">Sorted by</label>
    <select name="sorted" id="sorted">
      <option value="Name">Name</option>
      <option value="HorsepowerUp">HorsePower: Low to High</option>
      <option value="HorsepowerDown">HorsePower: High to Low</option>
      <option value="CylindersUp">Cylinders: Low to High</option>
      <option value="CylindersDown">Cylinders: High to Low</option>

      <option value="Country">Country</option>
    </select>
    <button @click="handleSorted" type="button">Sorted</button>
  </div>
</template>

<script>
  export default {
    props: {
      cars: Object,
    },
    computed: {
      handleSorted() {
        const selectValue = document.querySelector('#sorted').value;
        switch(selectValue){
          case "Name":
            this.cars.sort((a,b) => a.Name < b.Name ? -1 : 1);
            break
          case "HorsepowerUp":
            this.cars.sort((a,b) => a.Horsepower < b.Horsepower ? -1 : 1)
            break
          case "HorsepowerDown":
            this.cars.sort((a,b) => a.Horsepower > b.Horsepower ? -1 : 1)
            break
          case "CylindersUp":
            this.cars.sort((a,b) => a.Cylinders > b.Cylinders ? -1 : 1)
            break
          case "CylindersDown":
            this.cars.sort((a,b) => a.Cylinders < b.Cylinders ? -1 : 1)
            break
          case "Country":
            this.cars.sort((a,b) => a.Origin < b.Origin ?  -1 : 1)
            break
        };
      }
    }
  }
</script>

<style>
  .find{
    font-size: 1.2rem;
    margin-top: 18px;
    }
  label {
    margin-right: 18px;
  }
  select {
    font-size: 1.2rem;
    width: 120px;
    height: 28px;
    margin-right: 35px;
    background-color: #000;
    color: hsla(160, 100%, 37%, 1);
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 5px;
    cursor: pointer;
  }
  button{
    width: 120px;
    height: 28px;
    font-size: 1.2rem;
    background-color: transparent;
    color: #f2f2f2;
    border: solid #f2f2f2 1px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px;
    cursor: pointer;
    transition: .3s;
  }
  button:hover {
    color: hsla(160, 100%, 37%, 1);
    background-color: #acacac69;
    border: solid hsla(160, 100%, 37%, 1) 2px;
    transform: translateY(-3px);
  }
  @media (max-width: 780px) {
    button {
      width: 35px;
      height: 35px;
      border: none;
      background-image: url('./../assets/magnifying-glass-solid.svg');
      color: transparent;
    }
    button:hover {
    color: transparent;
    background-color: transparent;
    border: none;
    transform: translateY(0);
    }
  }
  @media (max-width: 400px) {
    .find {
      text-align: center;
    }
    button{
      margin-top: 20px;
    }
  }
</style>
