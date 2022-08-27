<template>
  <div class="aside">
    <div id="menu" class="menu">
      <div @click="to('/')" class="menu-item" id="first" v-focusable>
        <img src="../assets/logo.png" alt="home"/>
      </div>
      <div @click="to('/search')" class="menu-item" v-focusable>搜</div>
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
  width: 72px;
  height: 100%;
  padding-top: 10px;
  #first {
    margin-top: 0;
    padding: 10px;
    padding-bottom: 6px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .menu-item {
    padding: 14px 24px;
    font-size: 16px;
    margin: 10px;
    background: #f6f6f7;
    border-radius: 100px;
    color: #000;
  }
  .menu-item.focus {
    background: #ec4141;
    color: #49454f;
    img {
      filter: invert(1) brightness(999);
    }
  }
}
</style>