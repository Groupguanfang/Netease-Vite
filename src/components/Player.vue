<template>
  <div class="player" id="player" ref="player">
    <button id="player-first" v-focusable>55</button>
  </div>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {

    }
  },
  watch: {
    '$store.state.play.isOpen'() {
      if (this.$store.state.play.isOpen === true) {
        this.$refs.player.classList.add('open');
      } else {
        this.$refs.player.classList.remove('open');
      }
    }
  }
}
</script>

<style lang="less" scoped>
.player {
  position: absolute;
  background: #00000050;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  transform: translateY(100vh);
}
.open {
  transform: translateY(0);
}
</style>