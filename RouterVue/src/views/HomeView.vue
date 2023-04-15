<script setup>
import cars from '../data/cars.json';
import { RouterLink} from "vue-router";

</script>

<template>
  <h1>Home view</h1>
  <div class="cars">
    <RouterLink v-for="car in cars" :key="car.id" :to="`/cars/${car.id}`">{{ car.name }}</RouterLink>
  </div>
</template>

<style scoped>
  .cars {
    display: flex;
    flex-wrap: wrap;
  }

  .cars a {
    width: 200px;
    height: 200px;
    background-color: #ccc;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
  }

  .cars a:hover {
    background-color: #aaa;
  }
</style>