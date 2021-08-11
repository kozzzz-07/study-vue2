import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
    message: "",
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    message: state => state.message,
    message2: state => state.message
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
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
    updateMessage2(state, newMessage) {
      state.message = newMessage;
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
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    },
    updateMessage2({ commit }, newMessage) {
      commit("updateMessage2", newMessage);
    }
  },
});
