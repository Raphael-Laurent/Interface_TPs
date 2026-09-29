<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const users = ref(getUsers())

function getUsers() {
    const raw = JSON.parse(localStorage.getItem('users') || '{}')
    return Object.entries(raw).map(([username, data]) => ({
        username,
        role: data.role,
    }))
}

async function deleteUser(username) {
    await store.dispatch('user/deleteUser', username)
    users.value = getUsers() 

    if(!store.state.user.currentUser) {
        router.push('/')
    }
}
</script>

<template>
    <section id="user_table">
        <h2>Users</h2>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.username">
                    <td>{{ user.username }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <button @click="deleteUser(user.username)">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <RouterLink class="link" to="/home">Home</RouterLink>
    </section>
</template>

<style scoped>
#user_table table {
    border-collapse: collapse;
    width: 100%;
}

#user_table th,
#user_table td {
    border: 0.05rem solid black;
    padding: 0.5rem;
    text-align: left;
}

.link {
    display: block;
    text-decoration: none;
    font-weight: bold;
    color: black;
    margin: 1rem;
}
</style>