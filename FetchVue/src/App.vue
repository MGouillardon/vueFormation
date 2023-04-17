<script setup>
import RickAndMortyCards from "@/components/RickAndMortyCards.vue";
import SimpsonsCards from "@/components/PokemonCard.vue";
</script>

<template>
<main>
    <h1>Hero</h1>
    <Suspense>
            <RickAndMortyCards />
        <template #fallback>
            <div class="loader"></div>
        </template>
    </Suspense>
</main>
    <Suspense>
        <SimpsonsCards />
        <template #fallback>
            <h1>Loading...</h1>
        </template>
    </Suspense>
</template>


<style scoped>

.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
