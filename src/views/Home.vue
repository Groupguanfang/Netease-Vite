<template>
  <div>
    <swiper></swiper>
    <div class="home padding">
      <NewSongs></NewSongs>
      <TopList></TopList>
      <BackTop></BackTop>
    </div>
  </div>
</template>

<script>
import TopList from "../components/Home/TopList.vue";
import NewSongs from "../components/Home/NewSongs.vue";
import Swiper from "../components/Home/Swiper.vue";
import BackTop from "../components/BackTop.vue";
export default {
  data() {
    return {
      avatar:
        "https://s4.music.126.net/style/web2/img/default/default_avatar.jpg",
    };
  },
  components: {BackTop, Swiper, TopList, Swiper, NewSongs },
};
</script>

<style lang="less" scoped>
main {
  padding: 0!important;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}
</style>