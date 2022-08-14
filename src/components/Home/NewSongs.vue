<template>
  <div class="newsongs">
    <h2>推荐</h2>
    <div class="list" id="newsongs-list">
      <div
        @onFocus="focus()"
        @onBlur="blur()"
        v-focusable
        class="list-item"
        :key="index"
        v-for="(item, index) in list"
      >
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
  methods: {
    focus() {
      this.$tv.scrollEl = document.querySelector("#newsongs-list");
    },
    blur() {
      this.$tv.scrollEl = document.querySelector("main");
    },
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
  width: 100%;
  .list {
    flex-shrink: 0;
    transition: ease 0.2s;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    gap: 10px;
    padding: 10px 0;
    padding-left: 10px;
    .list-item {
      width: 100%;
      height: 100%;
      transition: ease 0.2s;
    }
    .list-item.focus {
      transform: scale(1.1);
      transition: ease 0.2s;
    }
  }
}
</style>