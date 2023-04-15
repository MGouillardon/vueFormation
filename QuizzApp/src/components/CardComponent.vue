<script setup>
import { RouterLink } from "vue-router";
import { useRouter} from "vue-router";

const {quiz} = defineProps({
  quiz: {
    type: Object,
    required: true
  }
})

const router = useRouter();

const goToQuiz = () => {
  router.push(`/quiz/${quiz.id}`)
}

</script>

<template>
  <div @click="goToQuiz" class="card">
    <img :src="quiz.img" alt="">
    <div class="card__text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  object-fit: cover;
}

.card .card__text {
  padding: 0 5px;
}

.card .card__text h2 {
  font-weight: bold;
  margin-top: 10px;
}

</style>