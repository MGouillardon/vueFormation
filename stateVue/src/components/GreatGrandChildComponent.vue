<script setup>
import useArray from "@/composables/useArray.js";

const { arr } = useArray();

</script>
<template>
  <div>
    <h1>Great Grand Child {{ arr }}</h1>
  </div>
</template>

<style scoped>

</style>