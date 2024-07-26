<template>
  <div class="home">
    <div class="count">{{ count }}</div>
    <div class="buttons">
      <button @click="decreaseCount">-</button>
      <button @click="increaseCount">+</button>
    </div>
    <hr />
    <div>The counter is: {{ oddOrEven }}</div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const count = ref(0);

function increaseCount() {
  count.value++;
}

function decreaseCount() {
  count.value--;
}

const oddOrEven = computed(() => {
  if (count.value % 2 === 0) return "even";
  return "odd";
});
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
