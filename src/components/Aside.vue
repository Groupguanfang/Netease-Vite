<template>
  <div class="aside">
    <div class="logo">
      <img src="@/assets/neteaselogo.png" />
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
  },
};
</script>

<style lang="less" scoped>
.aside {
  border-right: #e0e0e0 1px solid;
  width: 240px;
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
  .menu-item {
    padding: 14px 24px;
    font-size: 16px;
    margin: 10px;
    background: #f6f6f7;
    border-radius: 100px;
    color: #000;
  }
  .menu-item.focus {
    background: var(--main);
    color: #49454f;
  }
}
</style>