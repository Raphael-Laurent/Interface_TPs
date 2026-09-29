export default {
    namespaced: true,
    state: {
        tacos: 0,
        delayIncrement: 5000,
        intervalId: null,
        increment: 1,
        autoIncrement: 1,
        tomatoes_price: 200,
        cilantro_price: 2000,
        cheese_price: 20000,
        knife_price: 25,
        tortilla_press_price: 50,
        iron_skillet_price: 25,

    },
    getters: {
        delayInSeconds: state => state.delayIncrement / 1000,
    },
    mutations: {
        ajouterTacos(state, number) { state.tacos += number; },
        buyKnife(state) {
            state.tacos -= state.knife_price
            state.autoIncrement += 1
            state.knife_price = Math.floor(state.knife_price * 1.25)
        },
        buyTortillaPress(state) {
            state.tacos -= state.tortilla_press_price
            state.autoIncrement += 5
            state.tortilla_press_price = Math.floor(state.tortilla_press_price * 1.25)
        },
        buyIronSkillet(state) {
            state.tacos -= state.iron_skillet_price
            state.delayIncrement -= 200
            state.iron_skillet_price = Math.floor(state.iron_skillet_price * 1.25)
        },
        buyTomatoes(state) {
            state.tacos -= state.tomatoes_price
            state.increment += 1
            state.tomatoes_price = Math.floor(state.tomatoes_price * 1.05)
        },
        buyCilantro(state) {
            state.tacos -= state.cilantro_price
            state.increment += 5
            state.cilantro_price = Math.floor(state.cilantro_price * 1.05)
        },
        buyCheese(state) {
            state.tacos -= state.cheese_price
            state.increment += 20
            state.cheese_price = Math.floor(state.cheese_price * 1.05)
        },
        setIntervalId(state, id) {
            state.intervalId = id // on enregistre l'id d'une nouvelle intervalle
        },
        loadState(state, savedState) {
            Object.assign(state, savedState)
        }
    },
    actions: {
        startAutoIncrement({commit, state}) {
            if (state.intervalId) clearInterval(state.intervalId) // si une intervale est en cours, on l'arrête
            
            const id = setInterval(() => {
                commit('ajouterTacos', state.autoIncrement)
            }, state.delayIncrement)
            commit('setIntervalId', id) // on enregistre la première/nouvelle intervalle
        }
    }
}