<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

async function logout() {
    await store.dispatch('user/logout')
    router.push('/')
}

</script>

<template>
    <section>
        <button @click="logout">Logout</button>
    </section>
</template>

<style scoped></style>