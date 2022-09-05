import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import axios from "axios";
import "./assets/index.less";
import "./assets/dark.less"
import "./storage";
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'
Vue.use(Message, { name: 'msg' })

axios.defaults.baseURL = "https://server.xhhzs.cn";
Vue.prototype.$axios = axios;

import focusable from "vue-tv-focusable";
Vue.use(focusable);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
