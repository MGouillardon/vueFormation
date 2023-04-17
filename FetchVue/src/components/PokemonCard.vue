<script setup>
import {ref, watch, onMounted} from 'vue';

const characters = ref(null);
const page = ref(0);

onMounted(async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    characters.value = data.results;
});

</script>

<template>
    <div>
        <h1>Pokemon</h1>
        <div class="button-container">
            <button @click="page--">Prev</button>
            <button @click="page++">Next</button>
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


</style>