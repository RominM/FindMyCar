<script>
  import CARS_URL from './model/url';

  export default {
    data(){
      return {
        loading: true,
        cars: []
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = true;
      fetch(CARS_URL)
        .then(res => res.json())
        .then(data => this.cars = data)
        .catch(err => console.log(err))
        .finally(this.loading = false)
      }, 5000)
    }
  }
</script>

<!-- <script>
export default {
  data() {
    return {
      loading: false,
      todo: ''
    };
  },
  async created () {
    this.loading = true
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      this.todo = await res.json()
      this.loading = false
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  }
};
</script> -->

<template>
  <div v-if="loading" class="loader">
  <div class="progress_bar animate-loader">
  <div class="content">
    <div class="wrapper">
      <div class="viewer">
        <div class="shimmer"></div>
      </div>
    </div>
    <div class="state" data-start="Sending Request" data-middle="Validating" data-end="Almost there!"></div>
  </div>
</div>
</div>
  <router-view :cars="cars"></router-view>
</template>

<style>
.progress_bar {
  font-family: Arial;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  top: 60px;
  z-index: 999;
  height: calc(100vh - 60px);
}
  .wrapper {
    overflow: hidden;
    border-radius: 15px;
    width: 250px;
    background-color: #c4c4c4;
    overflow: hidden;
  }

  .viewer {
    background: hsla(160, 100%, 37%, 1);
    border-radius: 4px;
    height: 4px;
    transform: scaleX(0);
    transform-origin: 0 0;
  }

  .animate-loader .viewer {
    animation: FillAnimation 6s cubic-bezier(0.01, 1.06, 0.71, 1) forwards infinite;
  }

  .animate-loader .state::before {
    content: '';
    animation: TextChange 6s infinite;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .state {
    margin-top: 24px;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    font-weight: bold;
    color: hsla(160, 100%, 37%, 1);
  }

@keyframes FillAnimation {
  0% {
    transform: scaleX(0.028);
  }
  10% {
    transform: scaleX(0.028);
  }
  20% {
    transform: scaleX(0.028);
  }

  25% {
    transform: scaleX(0.24);
  }
  35% {
    transform: scaleX(0.24);
  }
  45% {
    transform: scaleX(0.24);
  }

  50% {
    transform: scaleX(0.624);
  }

  60% {
    transform: scaleX(0.624);
  }

  70% {
    transform: scaleX(0.624);
  }

  75% {
    transform: scaleX(0.928);
  }

  85% {
    transform: scaleX(0.928);
  }

  95% {
    transform: scaleX(0.928);
  }

  100% {
    transform: scaleX(1);
  }
}

@keyframes TextChange {
  0% {
    content: attr(data-start);
  }
  
  24% {
    content: attr(data-start);
  }
  
  25% {
    content: attr(data-middle);
  }
  55%{
    content: attr(data-middle);
  }

  99% {
    content: attr(data-end);
  }

  100% {
    content: attr(data-end);
  }
}
</style>