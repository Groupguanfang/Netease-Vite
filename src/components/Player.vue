<template>
  <div class="player" id="player" ref="player">
    <div class="row">
      <div class="left">
        <img :src="picUrl" />
      </div>
      <div class="right">

      </div>
    </div>
    <div class="bottom">
      <div id="player-first" v-focusable>
          <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
            <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      picUrl:"pic.png"
    }
  },
  watch: {
    '$store.state.play.picUrl'() {
      this.picUrl = this.$store.state.play.picUrl
    },
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #00000050;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  transform: translateY(100vh);
  .row {
    display: flex;
    align-items: center;
    padding: 50px;
    height: 100%;
    .left {
      width: 30%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 28px;
      }
    }
    .right {
      width: 70%;
    }
  }
  .bottom {
    height: 30%;
  }
}
.open {
  transform: translateY(0);
}
</style>