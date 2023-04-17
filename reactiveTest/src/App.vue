<script setup>
import { reactive } from 'vue';

const color = reactive({
    red: 0,
    green: 0,
    blue: 0,
});

const selectRandomColor = () => {
    color.red = Math.floor(Math.random() * 255);
    color.green = Math.floor(Math.random() * 255);
    color.blue = Math.floor(Math.random() * 255);
};

</script>

<template>
    <main :style="{backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}">
        <div>
            <input type="number" v-model="color.red" placeholder="red">
            <input type="number" v-model="color.blue" placeholder="green">
            <input type="number" v-model="color.green" placeholder="blue">
            <button @click="selectRandomColor">Select random color</button>
        </div>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

input {
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: black;
    cursor: pointer;
}

button {
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: white;
    color: black;
    cursor: pointer;
}
</style>
