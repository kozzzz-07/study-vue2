import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count";
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "",
  },
  getters,
  // mutationsでのみstateを更新すること
  // 同期的な処理しか書けない
  mutations,
  // actionsからのみcommitを使うという方針でも良い
  actions,
  modules: {
    count
  }
});
