import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./Action/mutations";

Vue.use(Vuex); // 使用Vuex
export default new Vuex.Store({
  state: state,
  mutations: mutations,
});
