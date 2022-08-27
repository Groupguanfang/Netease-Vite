<template>
  <div class="aside">
    <div id="menu" class="menu">
      <div @click="to('/')" class="menu-item" id="first" v-focusable>
        <img src="../assets/logo.png" alt="home"/>
      </div>
      <div @click="to('/search')" class="menu-item" v-focusable>
        <svg class="icon" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 15.5L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
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
    img {
      width: 100%;
      height: 100%;
    }
  }
  .menu-item {
    font-size: 16px;
    padding: 10px;
    padding-bottom: 6px;
    margin: 10px;
    background: #f6f6f7;
    border-radius: 100px;
    color: #000;
    .icon {
      font-size: 100%;
    }
  }
  .menu-item.focus {
    background: #ec4141;
    color: #49454f;
    img {
      filter: invert(1) brightness(999);
    }
    .icon {
      color: white;
    }
  }
}
</style>