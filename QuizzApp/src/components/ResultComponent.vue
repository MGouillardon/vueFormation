<script setup>
import { RouterLink} from "vue-router";

const {numberOfCorrectAnswers, numberOfQuestions} = defineProps({
  numberOfCorrectAnswers: {
    type: Number,
    required: true
  },
  numberOfQuestions: {
    type: Number,
    required: true
  }
})

</script>

<template>
  <div class="results">
    <p>Your results</p>
    <h1>{{ numberOfCorrectAnswers }} / {{ numberOfQuestions }}</h1>
    <RouterLink to="/">Go back to home</RouterLink>
  </div>
</template>

<style scoped>
  .results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .results p {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .results h1 {
    font-size: 3rem;
  }
</style>