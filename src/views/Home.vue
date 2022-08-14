<template>
  <div class="home">
    <Title title="发现音乐"></Title>
    <NewSongs></NewSongs>
    <TopList></TopList>
  </div>
</template>

<script>
import TopList from "../components/Home/TopList.vue";
import Title from "../components/Title.vue";
import NewSongs from "../components/Home/NewSongs.vue";
export default {
  components: { TopList, Title, NewSongs },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}
</style>