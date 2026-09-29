import { createStore } from 'vuex'
import tacos from './modules/tacos'
import user from './modules/user'
export default createStore({
    modules: {
        tacos,
        user
    }
})