<template>
  <div class="about">
    <h2>This is the about page</h2>
    <h1>{{ counterStore.count }}</h1>
    <button @click="counterStore.increaseCount">Increase Count</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>

<style scoped>
button {
  padding-inline: 1em;
  padding-block: 0.7em;
  border: none;
  background-color: rgb(45, 90, 252);
  color: white;
  font-size: 1rem;
  border-radius: 0.3em;
  cursor: pointer;
}
</style>
