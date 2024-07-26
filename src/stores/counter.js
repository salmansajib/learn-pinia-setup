import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // states
  const count = ref(0);

  // actions
  function increaseCount() {
    count.value++;
  }

  function decreaseCount() {
    count.value--;
  }

  // getters
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return "even";
    return "odd";
  });

  return {
    count,
    increaseCount,
    decreaseCount,
    oddOrEven,
  };
});
