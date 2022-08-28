<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <div class="option">
      <div @click="UserAction()" class="item" v-focusable>
        <img class="avatar" :src="avatar" />
        <div class="title">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar:
        "https://s4.music.126.net/style/web2/img/default/default_avatar.jpg",
    };
  },
  methods: {
    UserAction() {
      if (this.$store.state.isLogin == true) {
        this.$router.push("/user");
      } else {
        this.$router.push('/login');
      }
    },
  },
  props: ["title"],
};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 100px;
}
.option {
  height: 3em;
  display: flex;
  .item {
    border: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    border-radius: 100px;
    height: 32px;
    padding-right: 5px;
    padding-left: 3px;
    padding-top: 3px;
    padding-bottom: 3px;
    .title {
      margin-left: 10px;
      margin-right: 5px;
    }
  }
  .item.focus {
    border: none;
    background: #d0c6df;
  }
}
</style>