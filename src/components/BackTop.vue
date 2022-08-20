<template>
  <div class="backtop">
    <button @click="goTop()" v-focusable>返回顶部</button>
  </div>
</template>

<script>
export default {
  methods: {
    goTop() {
      document.querySelector("main").scrollTop =
        document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
</style>