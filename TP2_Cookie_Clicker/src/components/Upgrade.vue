<script setup>
import Ingredients_upgrade from './Ingredients_upgrade.vue'
import Ustensils_upgrade from './Ustensils_upgrade.vue'

</script>

<template>
    <section id="upgrade_zone">
        <Ustensils_upgrade />
        <Ingredients_upgrade />
    </section>
</template>

<style scoped>
#upgrade_zone {
    background-color: #abaaaa;
    width: 100%;
    margin: 0;
    padding: 1rem;
    display: inline-flex;
    justify-content: space-around;
}
</style>