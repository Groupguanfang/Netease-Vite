<template>
  <div class="home">
    <Title title="发现音乐">
      <div class="item">
        <img class="avatar" :src="avatar" />
        <div class="title">我的</div>
      </div>
    </Title>
    <NewSongs></NewSongs>
    <TopList></TopList>
  </div>
</template>

<script>
import TopList from "../components/Home/TopList.vue";
import Title from "../components/Title.vue";
import NewSongs from "../components/Home/NewSongs.vue";
export default {
  data() {
    return {
      avatar:
        "https://s4.music.126.net/style/web2/img/default/default_avatar.jpg",
    };
  },
  components: { TopList, Title, NewSongs },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
}
</style>