<script>
import Title from '../components/Title.vue'
export default {
  components: { Title },
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    changeDarkMode() {
      this.darkMode = !this.darkMode
    }
  }
}
</script>

<template>
  <div class="settings home padding">
    <Title title="设置"></Title>
    <div class="container">
      <div class="form-item" v-focusable @click="changeDarkMode()">
        <label>暗黑模式</label>
        <input class="switch" type="checkbox" v-model="darkMode" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 10px;
  background: #eee;
  border-radius: var(--radius);
}
</style>