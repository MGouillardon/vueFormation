<script setup>
import data from '../data/quizes.json';
import CardComponent from "@/components/CardComponent.vue";
import { RouterView } from "vue-router";
import { ref, watch } from 'vue';


const title = import.meta.env.VITE_APP_TITLE;
const quizes = ref(data);
const search = ref('');

watch(search, (value) => {
  if (value) {
    quizes.value = data.filter((quiz) => {
      return quiz.name.toLowerCase().includes(value.toLowerCase());
    });
  } else {
    quizes.value = data;
  }
});

</script>

<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
      <input v-model.trim="search" type="text" placeholder="Search..">
    </header>
    <div class="card__container">
      <CardComponent v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped>

header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.card__container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}


</style>