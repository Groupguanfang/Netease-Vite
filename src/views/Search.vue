<template>
  <div class="search home padding">
    <Title title="搜索"></Title>
    <div class="main">
      <div class="left">
        <div class="row">
          <input v-focusable v-model="text" type="search" :placeholder="placeholder" />
          <div class="search-button" v-focusable>
            <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 15.5L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="options">
          <div class="item" v-focusable>
            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 14V3L9 5V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 19H18C19.1046 19 20 18.1046 20 17V14H17C15.8954 14 15 14.8954 15 16V17C15 18.1046 15.8954 19 17 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 21H7C8.10457 21 9 20.1046 9 19V16H6C4.89543 16 4 16.8954 4 18V19C4 20.1046 4.89543 21 6 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            单曲
          </div>
          <div class="item" v-focusable>
            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 2.19995C19.5645 3.12649 23 7.162 23 11.9999C23 16.8378 19.5645 20.8733 15 21.7999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 9C16.1411 9.28364 17 10.519 17 12C17 13.481 16.1411 14.7164 15 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 2L11 2L11 22L1 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 15.5C4 16.3284 3.32843 17 2.5 17C1.67157 17 1 16.3284 1 15.5C1 14.6716 1.67157 14 2.5 14C3.32843 14 4 14.6716 4 15.5Z" fill="currentColor"/>
              <path d="M4 15.5C4 16.3284 3.32843 17 2.5 17C1.67157 17 1 16.3284 1 15.5C1 14.6716 1.67157 14 2.5 14C3.32843 14 4 14.6716 4 15.5ZM4 15.5V7.6C4 7.26863 4.26863 7 4.6 7H7" stroke="currentColor" stroke-linecap="round"/>
            </svg>
            专辑
          </div>
          <div class="item" v-focusable>
            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="currentColor" stroke-linecap="round"/>
              <path d="M13 14V14C13 11.2386 15.2386 9 18 9V9C20.7614 9 23 11.2386 23 14V14.5" stroke="currentColor" stroke-linecap="round"/>
              <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            歌手
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  data() {
    return {
      placeholder: "",
      text: "",
    };
  },
  methods: {
    addStr(oldStr, addItem, afterWhich) {
      var strArr = oldStr.split("");
      strArr.splice(oldStr.indexOf(afterWhich) + afterWhich.length, 0, addItem);
      return strArr.join("");
    },
    typeText(e) {
      let before = this.text;
      this.text = this.addStr(before, e);
    },
  },
  async mounted() {
    try {
      let placeholder = await this.$axios.get("/search/default");
      this.placeholder = placeholder.data.data.showKeyword;
    } catch {
      console.error(error);
    }
  },
  components: { Title },
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  .left {
    min-width: 300px;
    .row {
      display: flex;
      align-items: center;
      input {
        width: 100%;
      }
      input {
        &.focus {
          color: #fff;
          background: var(--main);
          transition: ease 0.2s;
          &::-webkit-input-placeholder {
            color: #f19e9e;
          }
        }
      }
      .search-button {
        height: 100%;
        width: 10%;
        display: flex;
        align-items: center;
        margin-left: 10px;
        border-radius: var(--radius);
        background: var(--third);
        padding: 3px;
        transition: ease 0.2s;
        &.focus {
          color: #fff;
          background: var(--main);
          transform: scale(1.1);
          transition: ease 0.2s;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .options {
    padding: 10px;
  }
  .right {
    width: 100%;
  }
}
</style>