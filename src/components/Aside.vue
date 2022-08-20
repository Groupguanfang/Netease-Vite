<template>
  <div class="aside">
    <div class="logo">
      <img src="@/assets/neteaselogo.png" />
    </div>
    <div class="nav_button">
      <div class="item" @click="go('back')" v-focusable>←</div>
      <div class="item" @click="go('next')" v-focusable>→</div>
      <div class="item" @click="go()" v-focusable>↑</div>
    </div>
    <div id="menu" class="menu">
      <div @click="to('/')" class="menu-item" id="first" v-focusable>发现</div>
      <div @click="to('/search')" class="menu-item" v-focusable>搜索</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    to(push) {
      this.$router.push(push);
    },
    go(nav) {
      if (nav === "back") {
        this.$router.go(-1);
      } else if (nav === "next") {
        this.$router.go(1);
      } else {
        document.querySelector("main").scrollTop =
          document.documentElement.scrollTop = 0;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.aside {
  border-right: #e0e0e0 1px solid;
  width: 280px;
  height: 100%;
  .logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    img {
      width: 78%;
      margin: 0 10px;
    }
  }
  .nav_button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    gap: 10px;
    .item {
      background: var(--main);
      border-radius: 14px;
      width: 33.3%;
      text-align: center;
      padding: 20px;
      font-size: 24px;
      transition: ease 0.2s;
    }
    .item.focus {
      transition: ease 0.2s;
      transform: scale(1.1);
    }
  }
  .menu-item {
    padding: 14px 24px;
    font-size: 16px;
    margin: 10px;
    background: #f6f6f7;
    border-radius: 14px;
    color: #000;
  }
  .menu-item.focus {
    background: var(--main);
    color: #49454f;
  }
}
</style>