<template>
  <div class="backtop">
    <button @click="goTop()" v-focusable>返回顶部</button>
  </div>
</template>

<script>
export default {
  methods: {
    goTop() {
      document.querySelector('main').scrollTop = 0
      this.$tv.requestFocus(document.querySelector("#first"))
    },
  },
};
</script>

<style lang="less" scoped>
.backtop {
  margin: 10px;
}
</style>