<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const increment = computed(() => store.state.tacos.increment)
const autoIncrement = computed(() => store.state.tacos.autoIncrement)
const delaySeconds = computed(() => store.getters['tacos/delayInSeconds'])
</script>

<template>
    <section id="infos">
        <h1>Infos</h1>
        <p>Increment: {{ increment }}/click</p>
        <p>Auto-increment: {{ autoIncrement}}/{{delaySeconds}}s</p> 
    </section>
</template>

<style scoped>
#infos {
    border: 0.05rem solid black;
    padding: 1rem;
    display: inline-flex;
    flex-direction: column;
    box-shadow: 0 0 .2rem black;
    margin: 1rem;
}

#infos h1 {
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
}

#infos p {
    margin: 0.5rem;
}
</style>