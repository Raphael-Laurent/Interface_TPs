<script setup>
import TacosClicker from './TacosClicker.vue'
import Infos from './Infos.vue'
import Upgrade from './Upgrade.vue'
import LogoutButton from './LogoutButton.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()
const tacos = computed(() => store.state.tacos.tacos)

onMounted(() => {
    store.dispatch('tacos/startAutoIncrement')
})
</script>

<template>
    <section>
        <LogoutButton />
        <TacosClicker />
        <p>Tacos: {{ tacos }}</p>
        <Upgrade />
        <Infos />
    </section>
</template>

<style>
body {
    margin: 0;
}
</style>