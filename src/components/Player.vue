<template>
  <div class="player" id="player" ref="player">
    <div class="row">
      <div class="left">
        <img :src="picUrl" />
        <div class="text">
          <div class="title">{{ title }}</div>
          <div class="author">{{ author }}</div>
        </div>
      </div>
      <div class="right">

      </div>
    </div>
    <div class="bottom">
      <div class="left">
      <!--退出-->
        <TransButton id="player-first" v-focusable @click.native="closeDrawer()">
          <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </TransButton>
      </div>
      <div class="middle">
        <!--上一首-->
        <TransButton v-focusable>
          <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7v10M17.028 5.267a.6.6 0 01.972.471v12.524a.6.6 0 01-.972.47l-7.931-6.261a.6.6 0 010-.942l7.931-6.262z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </TransButton>
        <!--暂停-->
        <TransButton v-focusable style="border-radius: 100px">
          <svg class="icon" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </TransButton>
        <!--下一首-->
        <TransButton v-focusable>
          <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 7v10M6.972 5.267A.6.6 0 006 5.738v12.524a.6.6 0 00.972.47l7.931-6.261a.6.6 0 000-.942L6.972 5.267z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </TransButton>
      </div>
      <div class="right">
        <!--播放列表-->
        <TransButton id="player-first" v-focusable>
          <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11h14M2 17h11M2 5h18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#000000"></path><path d="M20 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0v-7.9a.6.6 0 01.6-.6H22" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
        </TransButton>
      </div>
    </div>
  </div>
</template>

<script>
import TransButton from "./Player/TransButton.vue";
export default {
  name: "Player",
  components: {TransButton},
  data() {
    return {
      picUrl:"pic.png",
      title: "未在播放",
      author:"无"
    }
  },
  methods: {
    closeDrawer() {
      this.$store.commit('closeDrawer');
      this.$tv.limitingEl = document.querySelector('#first-layer');
      this.$tv.requestFocus(document.querySelector('#first'));
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
  background: #000000bd;
  color: white;
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
        box-shadow: 0px 10px 50px #00000059;
      }
      .text {
        margin: 0 10px;
        margin-top: 10px;
        .title {
          font-size: 24px;
        }
        .author {
          font-size: 18px;
          color: #a4a4a4;
        }
      }
    }
    .right {
      width: 70%;
    }
  }
  .bottom {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;
    .left,.middle,.right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
.open {
  transform: translateY(0);
}
</style>