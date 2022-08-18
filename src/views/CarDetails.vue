<template>
  <div class="car-details">
    <h1>Car details</h1>
    <router-link to="/">Go back Home</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      cars: Object,
    }
  };
</script>