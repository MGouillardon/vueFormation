import {ref} from 'vue'

export default () => {

    const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const add = (item) => arr.value.push(item)
    const remove = (item) => arr.value.splice(arr.value.indexOf(item), 1)
    const clear = () => arr.value = []
    return {arr, add, remove, clear}
}