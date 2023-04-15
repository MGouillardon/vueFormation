<script setup>
import {useRoute, useRouter, RouterView} from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const router = useRouter();
const carId = route.params.id;
const car = cars.find((car) => car.id === carId);

const showContact = () => {
  if (carId === '4') return;
  router.push(`/cars/${carId}/contact`);
}

</script>

<template>
  <div v-if="car">
    <h1>Car View</h1>
    <h2>{{ car.name }}</h2>
    <h2>{{ car.price }}</h2>
    <h2>{{ car.year }}</h2>
    <RouterView />
    <button @click="showContact">Click me for contact</button>
  </div>
  <div v-else>
    <h1>Car not found</h1>
  </div>
</template>