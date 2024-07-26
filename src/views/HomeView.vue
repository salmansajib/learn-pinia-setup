<template>
  <div class="home">
    <div class="count">{{ counterStore.count }}</div>
    <div class="buttons">
      <button @click="counterStore.decreaseCount">-</button>
      <button @click="counterStore.increaseCount">+</button>
    </div>
    <hr />
    <div>The counter is: {{ counterStore.oddOrEven }}</div>
    <hr />
    <h3>Edit counter:</h3>
    <input v-model="counterStore.count" type="number" />
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>

<style scoped>
.count {
  font-size: 4.5rem;
}

.buttons button {
  font-size: 2.5rem;
  margin: 10px;
}
</style>
