<template>
  <div class="home">
    <Title title="发现音乐"></Title>
    <TopList></TopList>
  </div>
</template>

<script>
import TopList from "../components/Home/TopList.vue";
import Title from "../components/Title.vue";
export default {
  components: { TopList, Title },
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