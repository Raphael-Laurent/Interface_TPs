export default {
    namespaced: true,
    state: {
        tacos: 0,
        delayIncrement: 5000,
        increment: 1,
        autoIncrement: 1,
        tomatoes_price: 10,
        salad_price: 2000,
        cheese_price: 20000
    },
    getters: {
        delayInSeconds: state => state.delayIncrement / 1000,
    },
    mutations: {
        ajouterTacos(state, number) { state.tacos += number; },
        buyTomatoes(state) {
            state.tacos -= state.tomatoes_price
            state.increment += 1
            state.tomatoes_price = Math.floor(state.tomatoes_price * 1.05)
        },
        buySalad(state) {
            state.tacos -= state.salad_price
            state.increment += 5
            state.salad_price = Math.floor(state.salad_price * 1.05)
        },
        buyCheese(state) {
            state.tacos -= state.cheese_price
            state.increment += 20
            state.cheese_price = Math.floor(state.cheese_price * 1.05)
        }
    },
    actions: {
        startAutoIncrement({commit, state}) {
            setInterval(() => {
                commit('ajouterTacos', state.autoIncrement)
            }, state.delayIncrement)
        }
    }
}