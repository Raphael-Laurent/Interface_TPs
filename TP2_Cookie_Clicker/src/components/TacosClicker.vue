<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
    <section id="tacosContainer">
        <img @click="store.commit('tacos/ajouterTacos', store.state.tacos.increment)" id="tacosClicker" src="../assets/tacos.png">
    </section>
</template>

<style scoped>
#tacosClicker {
    width: 25rem;
    cursor: pointer;
}

#tacosContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    align-self: center;
}

</style>