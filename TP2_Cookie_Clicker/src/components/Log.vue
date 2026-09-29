<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')
const mode = ref('login')

async function submit() {
    error.value = ''
    try {
        await store.dispatch(`user/${mode.value}`, {
            username: username.value,
            password: password.value
        })
        await store.dispatch('user/loadGame')
        router.push('/home')
    } catch (e) {
        error.value = e.message
    }
}

function toggleMode() {
    mode.value = mode.value === 'login' ? 'register' : 'login'
}
</script>

<template>
    <section id="login_zone">
        <h1>{{ mode === 'login' ? 'Login' : 'Register' }}</h1>

        <form @submit.prevent="submit">
            <input v-model="username" placeholder="Nom d'utilisateur" required />
            <input v-model="password" type="password" placeholder="Mot de passe" required />
            <button type="submit">
                {{ mode === 'login' ? 'Login' : "Register" }}
            </button>
        </form>

        <button type="button" @click="toggleMode">
            {{ mode === 'login' ? "Create account" : "I already have an account" }}
        </button>

        <p v-if="error" style="color: red">{{ error }}</p>
    </section>
</template>

<style scoped>
#login_zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    max-width: 15rem;
    margin: 2rem auto;
    padding: 1rem;
    border: .05rem solid black;
    border-radius: .5rem;
    background-color: #d3d3d3;
    box-shadow: 0 0 1rem black;
}

#login_zone form {
    display: flex;
    flex-direction: column;
    gap: .2rem;
}
</style>