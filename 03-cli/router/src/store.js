import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // mutationsでのみstateを更新すること
  // 同期的な処理しか書けない
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
  },
  // actionsからのみcommitを使うという方針でも良い
  actions: {
    increment({ commit }, number) {
      commit("increment", number);
    },
    decrement({ commit }, number) {
      commit("decrement", number);
    },
  },
});
