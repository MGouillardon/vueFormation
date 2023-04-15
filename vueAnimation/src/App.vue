<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="container">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
  <Transition name="route">
    <RouterView/>
  </Transition>
</template>

<style scoped>

.container {
  max-width: 300px;
  margin: 50px auto;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.route-enter-active {
  transition: all 0.5s ease;
}
</style>
