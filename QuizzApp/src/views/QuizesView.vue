<script setup>
import data from '../data/quizes.json';
import CardComponent from "@/components/CardComponent.vue";
import {RouterView} from "vue-router";
import {ref, watch} from 'vue';
import {gsap} from "gsap";


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

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(-60px)';
}

const enter = (el) => {
  gsap.to(el, {
    opacity: 1,
    transform: 'translateY(0)',
    duration: 0.5,
    delay: el.dataset.index * 0.3,
    ease: 'power4.out'
  })
}

const afterEnter = (el) => {
  el.style.transition = '';
}

</script>

<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
      <input v-model.trim="search" type="text" placeholder="Search..">
    </header>
    <div class="card__container">
      <TransitionGroup appear @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <CardComponent v-for="(quiz, index) in quizes" :key="quiz.id" :quiz="quiz" :data-index="index"/>
      </TransitionGroup>
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