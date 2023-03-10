import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sid: "",
  },
  mutations: {
    setSid(state, value) {
      state.sid = value
    },
  },
})

export default store
