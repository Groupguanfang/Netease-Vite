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
          <div class="item">单曲</div>
          <div class="item">专辑</div>
          <div class="item">歌手</div>
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
        transition: ease 0.2s;
        &.focus {
          background: var(--main);
          transition: ease 0.2s;
        }
      }
      .search-button {
        height: 100%;
        width: 10%;
        display: flex;
        align-items: center;
        margin-left: 10px;
        border-radius: 100px;
        background: var(--main);
        padding: 3px;
        transition: ease 0.2s;
        &.focus {
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
  .right {
    width: 100%;
  }
}
</style>