<template>
  <div class="toplist">
    <h2>热榜</h2>
    <div class="list">
      <div class="toplist-item" :key="index" v-for="(item, index) in toplist">
        <Cover
          :image="item.coverImgUrl + '?param=300y300'"
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
      toplist: [],
    };
  },
  async mounted() {
    try {
      let response = await this.$axios.get("/toplist");
      this.toplist = response.data.list;
    } catch (error) {
      console.error(error);
    }
  },
  components: { Cover },
};
</script>

<style lang="less" scoped>
.toplist {
  width: 100%;
}
.list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
}
.list .cover {
  height: 100%;
}
</style>