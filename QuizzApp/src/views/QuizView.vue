<script setup>
import QuestionComponent from "@/components/QuestionComponent.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import ResultComponent from "@/components/ResultComponent.vue";
import {useRoute} from "vue-router";
import {ref, computed} from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((quiz) => quiz.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResult = ref(false);

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);
const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`);
const onAnswerSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }
  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    showResult.value = true;
  }
  currentQuestionIndex.value++;
};


</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"/>
    <QuestionComponent v-if="!showResult"
                       :question="quiz.questions[currentQuestionIndex]"
                       @selectAnswer="onAnswerSelected"
    />
    <ResultComponent v-else
                     :numberOfCorrectAnswers="numberOfCorrectAnswers"
                     :numberOfQuestions="quiz.questions.length"
    />
  </div>
</template>
