<script setup>
import {ref, watch} from 'vue';

const URL = 'https://rickandmortyapi.com/api/character/';
const characters = ref(null);

async function getRickAndMortyData() {
    const response = await fetch(URL);
    return await response.json();
}

const rickAndMortyData = await getRickAndMortyData();
characters.value = rickAndMortyData.results;

const page = ref(1);
const maxPage = rickAndMortyData.info.pages;

watch(page, async (value) => {
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=' + value);
    const data = await response.json();
    characters.value = data.results;
});

</script>

<template>
    <div>
        <h1>Rick and Morty</h1>
        <div class="button-container">
            <button v-show="page > 1" @click="page--">Prev</button>
            <select v-model="page">
                <option v-for="i in maxPage" :key="i" :value="i">{{ i }}</option>
            </select>
            <button v-show="page != maxPage" @click="page++">Next</button>
        </div>
        <div class="characters">
            <div class="cards" v-for="character in characters" :key="character.id">
                <img :src="character.image" alt="character.name">
                <h3>{{ character.name }}</h3>
                <p>{{ character.species }}</p>
                <p>{{ character.gender }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.characters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.cards {
    width: 300px;
    height: auto;
    margin: 20px;
    border: 1px solid black;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cards img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.cards h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
}

.cards p {
    margin: 5px 0;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

button {
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
}

select {
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
}
</style>