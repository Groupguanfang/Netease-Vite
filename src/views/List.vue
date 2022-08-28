<template>
  <div class="list-single">
    <Title title="详情"></Title>

    <div class="header">
      <div class="left">
        <img class="cover" :src="cover" />
      </div>
      <div class="right">
        <div class="top">
          <h2 class="title">{{ title }}</h2>
          <div class="description">{{ description }}</div>
        </div>
        <div class="bottom">
          <button @onFocus="buttonFocus()" v-focusable :disabled="loading">播放全部</button>
          <div class="author">作者：{{ author.name }}</div>
        </div>
      </div>
    </div>

    <div class="content">
      <div
        class="content-item"
        v-focusable
        :key="index"
        v-for="(item, index) in songs"
      >
        <div>{{ item.name }}</div>
        <div>
          {{ getTime(item.dt) }}
        </div>
        <div class="author">
          {{ item.ar[0].name }}
        </div>
      </div>
    </div>

    <BackTop />
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import BackTop from "../components/BackTop.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      cover: "",
      title: "加载中",
      description: "",
      loading: true,
      songs: [],
      author: {
        name: "加载中",
      },
    };
  },
  methods: {
    buttonFocus() {
      document.querySelector('main').scrollTop = 0
    },
    /**
     * 将秒时间转为合适的格式输出
     *
     * @params int
     * @returns var
     * @author Zero
     * @since 2022
     */
    getTime(e) {
      let time = e.toString().substr(0, 3);
      return (time / 60).toFixed(2).replace(".", ":");
    },
  },
  async mounted() {
    try {
      // 歌单详情
      let data = await this.$axios.get("/playlist/detail?id=" + this.id);
      this.cover = data.data.playlist.coverImgUrl;
      this.title = data.data.playlist.name;
      this.description = data.data.playlist.description;
      this.loading = false;
      // 歌单内歌曲
      let songs = await this.$axios.get("/playlist/track/all?id=" + this.id);
      this.songs = songs.data.songs;
      // 获取该歌单的制作人信息
      let author = await this.$axios.get(
        "/user/detail?uid=" + data.data.playlist.userId
      );
      this.author.name = author.data.profile.nickname;
      console.log(author);
    } catch {
      console.error(error);
    }
  },
  components: { Title, BackTop },
};
</script>

<style lang="less" scoped>
h2 {
  font-size: 33px;
  margin-top: 0;
}
.list-single {
  margin: 0px 20px;
  .header {
    display: flex;
    .left {
      width: 20%;
      margin-right: 24px;
      max-width: 230px;
      min-width: 230px;
      img {
        width: 100%;
        border-radius: 24px;
      }
    }
    .right {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .bottom {
        margin-bottom: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
.content {
  .content-item {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    border-radius: var(--radius);
    margin: 10px 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    transition: ease 0.2s;
    user-select: none;
    div {
      flex: 1;
      display: flex;
      font-size: 16px;
      opacity: 0.88;
      color: var(--color-text);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
  .content-item.focus {
    transform: scale(1.005);
    background: var(--first);
    transition: ease 0.2s;
    color: #fff;
  }
}
</style>