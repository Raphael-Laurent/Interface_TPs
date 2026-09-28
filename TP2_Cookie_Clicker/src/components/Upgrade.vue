<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import Ingredients_upgrade from './Ingredients_upgrade.vue'

const store = useStore()
const increment = computed(() => store.state.tacos.increment)
const autoIncrement = computed(() => store.state.tacos.autoIncrement)
</script>

<template>
    <section id="upgrade_zone">
        <Ingredients_upgrade />
        <Ingredients_upgrade />
    </section>
</template>

<style scoped>
#upgrade_zone {
    background-color: grey;
    width: 100%;
    margin: 0;
    padding: 1rem;
    display: inline-flex;
    justify-content: space-around;
}
</style>