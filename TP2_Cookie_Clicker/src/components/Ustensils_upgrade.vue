<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const knife_price = computed(() => store.state.tacos.knife_price)
const tortilla_press_price = computed(() => store.state.tacos.tortilla_press_price)
const iron_skillet_price = computed(() => store.state.tacos.iron_skillet_price)
const tacos = computed(() => store.state.tacos.tacos)
const delayIncrement = computed(() => store.state.tacos.delayIncrement)
function buyKnife() {
    store.commit('tacos/buyKnife')
}
function buyTortillaPress() {
    store.commit('tacos/buyTortillaPress')
}
function buyIronSkillet() {
    store.commit('tacos/buyIronSkillet')
    store.dispatch('tacos/startAutoIncrement') // on lance une nouvelle intervalle avec le nouveau délai
}
</script>

<template>
    <section id="ustensils_upgrade_zone">
        Ustensils upgrade :
        <button @click="buyKnife" :disabled="tacos < knife_price">Knife ({{knife_price}} t)</button>
        <button @click="buyTortillaPress" :disabled="tacos < tortilla_press_price">Tortilla press ({{ tortilla_press_price }} t)</button>
        <button @click="buyIronSkillet" v-if="delayIncrement > 0" :disabled="tacos < iron_skillet_price">Iron skillet ({{ iron_skillet_price }} t)</button>
    </section>
</template>

<style scoped>
#ustensils_upgrade_zone {
    background-color: #ed5972;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: .5rem;
}
</style>