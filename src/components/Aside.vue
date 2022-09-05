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
      <div @click="to('/playlist')" class="menu-item" v-focusable>
        <svg class="icon" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11h14M2 17h11M2 5h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M20 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor"></path>
          <path d="M20 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0v-7.9a.6.6 0 01.6-.6H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
      </div>
      <div @click="to('/settings')" class="menu-item" v-focusable>
        <svg class="icon" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
    </div>

    <div class="player-container" v-focusable @click="openDrawer()">
        <img class="player" :src="pic"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic: "pic.png"
    }
  },
  methods: {
    openDrawer() {
      this.$store.commit('openDrawer');
      this.$tv.limitingEl = document.querySelector('#player');
      this.$tv.requestFocus(document.querySelector('#player-first'));
    },
    to(push) {
      try {
        this.$router.push(push);
      } catch (error) {
        console.log('您正处于本页面')
      }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  .player-container {
    margin: 10px;
    transition: ease 0.2s;
    &.focus {
      transform: scale(1.1);
      transition: ease 0.2s;
    }
    img {
      width: 100%;
      transition: ease 0.2s;
      border-radius: 100px;
    }
  }
}
</style>