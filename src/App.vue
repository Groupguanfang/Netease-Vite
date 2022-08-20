<template>
  <div id="app">
    <div class="first-layer">
      <aside>
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
  mounted() {
    // 聚焦
    this.$tv.requestFocus(document.querySelector("#first"));
    this.$tv.scrollEl = document.querySelector("main");
    // 当前播放
  },
};
</script>