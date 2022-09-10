<template>
  <div class="toplist">
    <h2>热榜</h2>
    <div class="list">
      <div
        v-focusable
        @click="Action(item.id)"
        class="toplist-item"
        :key="index"
        v-for="(item, index) in toplist"
        v-if="index < 4"
      >
        <Cover :image="item.coverImgUrl + '?param=300y300'"></Cover>
        <div class="right">
          <h3 class="title">{{ item.name }}</h3>
          <div class="description">{{ item.description }}</div>
        </div>
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
  methods: {
    Action(id) {
      this.$router.push("/list/" + id);
    },
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
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}
.list .cover {
  height: 100%;
}

.toplist-item {
  transition: ease 0.2s;
  width: 100% !important;
  display: flex;
  background: #fff;
  border-radius: var(--radius);
  padding: 10px;
  .cover {
    width: 120px;
    min-width: 120px;
  }
  .right {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 10px;
    h3 {
      margin: 0;
    }
    .description {
      margin-top: 10px;
      color: #888;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
    }
  }
}
.toplist-item.focus {
  transform: scale(1.01);
  transition: ease 0.2s;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%),
              0 2px 4px -1px rgb(0 0 0 / 6%);
  background: #ffdcf1;
}
</style>