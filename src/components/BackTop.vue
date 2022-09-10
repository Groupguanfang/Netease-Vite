<template>
  <div class="backtop top-gap bottom-gap">
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