
export default {
    namespaced: true,
    state: {
        currentUser: null,
    },
    mutations: {
        setCurrentUser(state, username) {
            state.currentUser = username
        }
    },
    actions: {
        register({ commit }, { username, password }) {
            const users = JSON.parse(localStorage.getItem('users') || '{}')
            if (users[username]) {
                throw new Error('This username is already taken')
            }
            users[username] = {password, save: null}
            localStorage.setItem('users', JSON.stringify(users))

            commit('setCurrentUser', username)
        },
        login({ commit }, { username, password }) {
            const users = JSON.parse(localStorage.getItem('users') || '{}')
            const user = users[username]

            if (!user || user.password !== password) {
                throw new Error('Invalid')
            }

            commit('setCurrentUser', username)
        },
        logout({ commit, dispatch }) {
            dispatch('saveGame') // on sauvegarde le jeu au logout
            commit('setCurrentUser', null)
        },
        saveGame({ state, rootState}) {

            if(!state.currentUser) return

            const users = JSON.parse(localStorage.getItem('users') || '{}')
            users[state.currentUser].save = rootState.tacos
            localStorage.setItem('users', JSON.stringify(users))
        },
        loadGame({ state, commit }) {
            if (!state.currentUser) return

            const users = JSON.parse(localStorage.getItem('users') || '{}')
            const save = users[state.currentUser].save

            if(save) {
                commit('tacos/loadState', save, { root: true})
            }
        }
    }
}