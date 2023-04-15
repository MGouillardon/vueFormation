<script setup>
const {questionStatus, barPercentage} = defineProps({
  questionStatus: {
    type: String,
    required: true
  },
  barPercentage: {
    type: String,
    required: true
  }
})

</script>

<template>
  <header>
    <h4>{{ questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="{width: barPercentage}"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.bar {
  width: 80%;
  height: 10px;
  background-color: #ccc;
  border-radius: 5px;
}

.completion {
  height: 100%;
  width: 66%;
  background-color: #000;
  border-radius: 5px;
}
</style>