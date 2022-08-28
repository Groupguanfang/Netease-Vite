<template>
  <div id="app">
    <div class="first-layer">
      <aside v-if="show">
        <Aside />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Aside from "./components/Aside.vue";
export default {
  components: { Aside },
  data() {
    return {
      show: true
    }
  },
  async mounted() {
    /**
     * 页面载入后聚焦到第一个项目
     */
    this.$tv.requestFocus(document.querySelector("#first"));
    this.$tv.scrollEl = document.querySelector("main");
    /**
     * 页面载入后查看登录状态
     */
    let user = await this.$axios.post('/login/status',{
      cookie: localStorage.getItem('cookie'),
    });
    console.log(user);
    if (user.data.data.profile === null) {
      this.$store.commit('logoutAction');
    } else {
      this.$store.commit('loginAction');
    }
    /**
     * 判断API是否能访问
     * @returns null
     */
    try {
      let network = await this.$axios.get('/inner/version');
    } catch(error) {
      console.log(error);
      this.$router.push('/404');
      this.show = false;
    }
  },
};
</script>