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
    <section id="home">
        <LogoutButton />
        <TacosClicker />
        <p>Tacos: {{ tacos }}</p>
        <Upgrade />
        <Infos />
        <RouterLink id="link" to="/userTable">User Table</RouterLink>
    </section>
</template>

<style>
body {
    margin: 0;
}

#home {
    display: flex;
    flex-direction: column;
    align-items: flex-start;;
}

#link {
    margin: 1rem 1rem 3rem 1rem;
    text-decoration: none;
    font-weight: bold;
    color: black;
}
</style>