<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const tomatoes_price = computed(() => store.state.tacos.tomatoes_price)
const salad_price = computed(() => store.state.tacos.salad_price)
const cheese_price = computed(() => store.state.tacos.cheese_price)
const tacos = computed(() => store.state.tacos.tacos)

function buyTomatoes() {
    store.commit('tacos/buyTomatoes')
}
function buySalad() {
    store.commit('tacos/buySalad')
}
function buyCheese() {
    store.commit('tacos/buyCheese')
}
</script>

<template>
    <section id="ingredient_upgrade_zone">
        Ingredients upgrade :
        <button @click="buyTomatoes" :disabled="tacos < tomatoes_price">Tomatoes ({{tomatoes_price}} t)</button>
        <button @click="buySalad" :disabled="tacos < salad_price">Salad ({{ salad_price }} t)</button>
        <button @click="buyCheese" :disabled="tacos < cheese_price">Cheese ({{ cheese_price }} t)</button>
    </section>
</template>

<style scoped>
#ingredient_upgrade_zone {
    background-color: pink;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: .5rem;
}
</style>