import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import axios from "axios";
import "./assets/index.less";
import "./storage";

axios.defaults.baseURL = "https://server.xhhzs.cn";
Vue.prototype.$axios = axios;

import focusable from "vue-tv-focusable";
Vue.use(focusable);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
