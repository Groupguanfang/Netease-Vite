<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <div class="option">
      <div @click="UserAction()" class="item">
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
      this.$router.push("/user");
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
    background: #f6f6f7;
    display: flex;
    align-items: center;
    border-radius: 100px;
    padding: 8px;
    .title {
      margin-left: 10px;
      margin-right: 5px;
    }
  }
}
</style>