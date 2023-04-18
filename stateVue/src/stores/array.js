import { defineStore } from "pinia";

export const useArrayStore = defineStore({
    id: "array",
    state: () => ({
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }),
    actions: {
        add(item) {
            this.arr.push(item);
        }
    },
    getters: {
        even(state) {
            return state.arr.filter((item) => item % 2 === 0);
        },
        filterArr(state) {
            return (minNumber) => state.arr.filter((item) => item >= minNumber);
        }
    }
});