import Vue from "vue";
import Vuex from "vuex";
import user from "./user";

Vue.use(Vuex); // 使用Vuex
export default new Vuex.Store({
  modules: {
    user: user
  }
});
