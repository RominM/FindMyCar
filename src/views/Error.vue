<template>
  <div class="error-content">  
    <div class="error">
      <h1 class="title">Error 404</h1>
      <router-link to="/">&lt&lt&nbsp Go back Home</router-link>
    </div>
    <img src="./../assets/pneu-error1.png" alt="pneu error" class="img-error">
    <br>
    <span class="not-found">Not found</span>
  </div>
</template>

<style>
  .error-content{
    position: relative;
    height: 100vh;
  }
  .img-error{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    margin: auto;
    opacity: .2;
  }
  .not-found {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: block;
    text-align: center;
    white-space: nowrap;
    font-size: clamp(32px, 5em, 7rem);
    font-weight: lighter;
  }
</style>