<template>
  <div class="find">
    <label for="sorted">Sorted by</label>
    <select name="sorted" id="sorted">
      <option value="Name">Name</option>
      <option value="HorsePower">HorsePower</option>
      <option value="Cylinder">Cynlinder</option>
      <option value="Country">Country</option>
    </select>
    <button @click="handleSorted" id="btn">Sorted</button>
  </div>
</template>

<script>
  export default {
    props: {
      cars: Object,
    },
    methods: {
      handleSorted() {
        const value = document.querySelector('#sorted').value;

        switch(value){
          case "Name":
            this.cars.sort((a,b) => {
              return a.Name - b.Name
            })
            break
          case "HorsePower":
            alert('is HorsePower')
            break
          case "Cylinder":
            alert('is Cylinder')
            break
          case "Country":
            alert('is Country');
            break
        }
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
