<script setup>
import GrandChildComponent from "@/components/GrandChildComponent.vue";
import useArray from "@/composables/useArray.js";
import {useArrayStore} from "@/stores/array";

const { arr, add, filterArr } = useArrayStore()

</script>
<template>
    <div>
        <h1>Child</h1>
        <p>{{ arr }}</p>
        <button @click="add(arr.length + 1)">Add</button>
        <p>{{ filterArr(4) }}</p>
        <div class="line"></div>
        <GrandChildComponent/>
    </div>
</template>

<style scoped>

</style>