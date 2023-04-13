<script setup>
import {ref} from 'vue'

const modal = ref(false)
const newNote = ref("")
const errorMessage = ref("")
const notes = ref([])

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}
const addNote = () => {
  if(newNote.value.trim().length < 4) {
    return errorMessage.value = "Note must be at least 4 characters long"
  }
  notes.value.push({
    id: notes.value.length + 1,
    text: newNote.value,
    date: new Date().toLocaleDateString("fr-FR"),
    backgroundColor: getRandomColor()
  })
  newNote.value = ""
  modal.value = false
}

</script>

<template>
  <main>
    <div v-if="modal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="bote" cols="30" rows="10"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote">Add Note</button>
        <button @click="modal = false" class="button--close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button class="container__button" @click="modal = true">+</button>
      </header>
      <div class="card__container">
        <div v-for="note in notes" :key="note.id" class="card" :style="{backgroundColor: note.backgroundColor}">
          <p class="card__text">{{ note.text }}</p>
          <p class="card__date">{{ note.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
  height: 100vh;
  width: 100vw;
}
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    }

  .modal p {
    color: red;
    font-size: 12px;
    margin-top: 10px;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }

  .modal .button--close {
    background: rgb(193, 15, 15);
    margin-top: 7px;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  h1 {
    font-size: 75px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .container__button {
    background-color: rgb(21, 20, 20);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: color .4s ease-in-out, background-color .4s ease-in-out;
  }

  .container__button:hover {
    background-color: rgb(255, 255, 255);
    color: black;
  }

  .card__container {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .card__date {
    font-size: 12px;
  font-weight: bold;
  }


</style>