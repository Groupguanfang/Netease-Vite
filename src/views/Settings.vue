<template>
  <div class="settings home padding">
    <Title title="设置"></Title>
    <div class="settings-container">
      <div class="item">
        <div class="label">是否开启暗黑模式</div>
        <input type="checkbox" @change="changeMode()" v-model="darkMode" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue"
export default {
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    changeMode() {
      console.log(this.darkMode)
    }
  },
  components: { Title }
}
</script>