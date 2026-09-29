<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const tomatoes_price = computed(() => store.state.tacos.tomatoes_price)
const cilantro_price = computed(() => store.state.tacos.cilantro_price)
const cheese_price = computed(() => store.state.tacos.cheese_price)
const tacos = computed(() => store.state.tacos.tacos)

function buyTomatoes() {
    store.commit('tacos/buyTomatoes')
}
function buyCilantro() {
    store.commit('tacos/buyCilantro')
}
function buyCheese() {
    store.commit('tacos/buyCheese')
}
</script>

<template>
    <section id="ingredient_upgrade_zone">
        Ingredients upgrade :
        <button @click="buyTomatoes" :disabled="tacos < tomatoes_price">Tomatoes ({{tomatoes_price}} t)</button>
        <button @click="buyCilantro" :disabled="tacos < cilantro_price">Cilantro ({{ cilantro_price }} t)</button>
        <button @click="buyCheese" :disabled="tacos < cheese_price">Cheese ({{ cheese_price }} t)</button>
    </section>
</template>

<style scoped>
#ingredient_upgrade_zone {
    background-color: #e8ad3f;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: .5rem;
}
</style>