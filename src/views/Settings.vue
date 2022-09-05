<template>
  <div class="settings home padding">
    <Title title="设置"></Title>
    <div class="settings-container">
      <div class="item">
        <div class="label">是否开启暗黑模式</div>
        <input type="checkbox" @change="changeMode()" v-focusable v-model="darkMode" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  data() {
    return {
      darkMode: false
    }
  },
  mounted() {
    if (localStorage.getItem('darkmode') === 'true') {
      this.darkMode = true
    } else {
      this.darkMode = false
    }
  },
  methods: {
    changeMode() {
      if (this.darkMode === true) {
        document.querySelector('body').classList.add('dark')
      } else {
        document.querySelector('body').classList.remove('dark')
      }
      localStorage.setItem('darkmode',this.darkMode);
      console.log(localStorage.getItem('darkmode'));
    }
  },
  components: { Title }
}
</script>