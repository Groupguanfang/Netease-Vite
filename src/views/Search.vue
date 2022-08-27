<template>
  <div class="search home padding">
    <Title title="搜索"></Title>
    <div class="main">
      <div class="left">
        <input v-focusable v-model="text" type="search" :placeholder="placeholder" />
        <div class="word">
          <div class="line">
            <div v-focusable>A</div>
            <div v-focusable>B</div>
            <div v-focusable>C</div>
            <div v-focusable>D</div>
            <div v-focusable>E</div>
            <div v-focusable>F</div>
            <div v-focusable>G</div>
            </div>
            <div class="line">
            <div v-focusable>H</div>
            <div v-focusable>I</div>
            <div v-focusable>J</div>
            <div v-focusable>K</div>
            <div v-focusable>L</div>
            <div v-focusable>M</div>
            <div v-focusable>N</div>
            </div>
            <div class="line">
            <div v-focusable>O</div>
            <div v-focusable>P</div>
            <div v-focusable>Q</div>
            <div v-focusable>R</div>
            <div v-focusable>S</div>
            <div v-focusable>T</div>
            <div v-focusable>U</div>
            </div>
            <div class="line">
            <div v-focusable>V</div>
            <div v-focusable>W</div>
            <div v-focusable>X</div>
            <div v-focusable>Y</div>
            <div v-focusable>Z</div>
            <div v-focusable>1</div>
            <div v-focusable>2</div>
            </div>
            <div class="line">
            <div v-focusable>3</div>
            <div v-focusable>4</div>
            <div v-focusable>5</div>
            <div v-focusable>6</div>
            <div v-focusable>7</div>
            <div v-focusable>8</div>
            <div v-focusable>9</div>
            </div>
            <div class="line">
            <div v-focusable>0</div>
            </div>
          </div>
          <div>快速键入，<br>或将光标移动至搜索框，按确定键使用系统键盘搜索</div>
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
    input {
      width: 100%;
    }
    .word {
      width: 100%;
      .line {
        display: flex;
        width: 100%;
        div {
          background: var(--second);
          padding: 10px;
          width: 100%;
          transition: ease 0.2s;
          font-size: 24px;
          text-align: center;
        }
        div.focus {
          transform: scale(1.1);
          background: var(--main);
          transition: ease 0.2s;
        }
      }
    }
  }
  .right {
    width: 100%;
  }
}
</style>