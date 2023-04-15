<script setup>

const {question} = defineProps({
  question: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['selectAnswer'])
const emitSelectedAnswer = (isCorrect) => {
  emit('selectAnswer', isCorrect)
}

</script>

<template>
  <div>
    <div class="questions__container">
      <h1 class="question">{{ question.text}}</h1>
    </div>
    <div class="answers__container">
      <div class="answer" v-for="option in question.options" :key="option.id" @click="emitSelectedAnswer(option.isCorrect)">
        <div class="answer__label">{{ option.label }}</div>
        <div class="answer__value">{{ option.text }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.questions__container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 50px;
}

.question {
  font-size: 1.5rem;
  font-weight: bold;
}

.answers__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.answer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50px;
  background-color: #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.answer__label {
  width: 20%;
  height: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.answer__value {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.answer:hover {
  background-color: #aaa;
}

</style>