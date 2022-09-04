<template>
  <div id="app">

    <!--第一层-->
    <div class="first-layer" id="first-layer">
      <aside v-if="show">
        <Aside />
      </aside>
      <main>
        <router-view />
      </main>
    </div>

    <!--第二层-->
    <div class="second-layer">
      <Player></Player>
    </div>
  </div>
</template>

<script>
import Aside from "./components/Aside.vue";
import Player from "./components/Player.vue";
export default {
  components: {Player, Aside },
  data() {
    return {
      show: true
    }
  },
  async mounted() {
    /**
     * 页面载入后聚焦到第一个项目
     */
    this.$tv.limitingEl = document.querySelector('#first-layer');
    this.$tv.requestFocus(document.querySelector("#first"));
    this.$tv.scrollEl = document.querySelector("main");
    /**
     * 页面载入后查看登录状态
     */
    let user = await this.$axios.post('/login/status',{
      cookie: localStorage.getItem('cookie'),
    });
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

<style lang="less" scoped>

</style>