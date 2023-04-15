<script setup>
import {ref} from 'vue'

const list = ref([
  'Selena',
  'Joey',
  'Karen',
  'Carol'
])

const nameInput = ref('')
const addToList = () => {
  list.value.unshift(nameInput.value);
  nameInput.value = '';
}

const deleteName = (e) => {
  list.value.splice(list.value.indexOf(e.target.innerText), 1)
}

</script>

<template>
  <main>
    <div class="container">
      <input type="text" @keypress.enter="addToList" v-model="nameInput">
      <ul>
        <TransitionGroup name="list">
          <li v-for="name in list" :key="name" @click="deleteName">{{ name }}</li>
        </TransitionGroup>
      </ul>
    </div>
  </main>
</template>

<style scoped>

  .container {
    max-width: 300px;
    margin: 50px auto;

  }

  input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;

  }

  ul {
    list-style: none;
    padding: 0;

  }

  li {
    padding: 10px;
    border: 1px solid rgba(128, 128, 128, 0.1);
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .list-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }

  .list-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .list-enter-active {
    transition: all 0.5s ease;
    position: absolute;
  }

  .list-move {
    transition: all 0.5s ease;
  }


</style>
