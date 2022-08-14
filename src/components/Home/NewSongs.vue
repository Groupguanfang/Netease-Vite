<template>
  <div class="newsongs">
    <h2>推荐</h2>
    <div class="list">
      <div class="list-item" :key="index" v-for="(item, index) in list">
        <Cover
          :image="item.picUrl + '?param=300y300'"
          :title="item.name"
        ></Cover>
      </div>
    </div>
  </div>
</template>

<script>
import Cover from "../Cover.vue";
export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    try {
      let response = await this.$axios.get("/personalized/newsong");
      this.list = response.data.result;
    } catch (error) {
      console.error(error);
    }
  },
  components: { Cover },
};
</script>

<style lang="less" scoped>
.newsongs {
  .list {
    flex-shrink: 0;
    transition: ease 0.2s;
    display: flex;
  }
}
</style>