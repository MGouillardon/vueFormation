<script setup>
import { useRoute} from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const car = cars.find((car) => car.id === route.params.id);

</script>

<template>
  <div v-if="car">
    <h1>Contact Info</h1>
    <h2>{{ car.contact.name }}</h2>
    <h2>{{ car.contact.phone }}</h2>
  </div>
</template>