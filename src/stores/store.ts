import { defineStore } from "pinia";
import { ref } from "vue";

export const useAfStore = defineStore("piniaStore", () => {
  const signup = ref(false);
 
  return {
    signup
  };
});
