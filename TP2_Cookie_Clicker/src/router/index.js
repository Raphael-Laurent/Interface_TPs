import { createWebHistory, createRouter } from 'vue-router'
import store from '../store' // adapte le chemin selon où est ton store

import HomeView from '../components/HomeView.vue'
import Log from '../components/Log.vue'
import UserTable from '../components/UsersTable.vue'

const routes = [
    {path: '/', component: Log},
    {path: '/home', component: HomeView},
    {path: '/userTable', component: UserTable}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => { // on vérifie qu'un utilisateur est connecté à chaque changement de page, sinon on revient à Log.vue
    const isLoggedIn = store.state.user.currentUser != null

    if (to.path === '/home' && !isLoggedIn) {
        return '/'
    }
})

export default router