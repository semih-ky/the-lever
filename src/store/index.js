import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    score: 0
  },
  mutations: {
    increment (state) {
      state.score += 1;
    },
    reset (state) {
      state.score = 0;
    }
  }
})