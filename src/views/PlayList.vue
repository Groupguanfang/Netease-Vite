<template>
  <div class="playlist padding home">
    <Title title="播放列表"></Title>
    <div class="content" v-if="showList">

    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue"
export default {
  name: "PlayList",
  data() {
    return {
      showList: false
    }
  },
  mounted() {
    const list = localStorage.getItem('playList');
    if (list === undefined || list === null || list === '') {
      this.showList = false
    } else {
      this.showList = true
    }
  }
  components: { Title }
}
</script>

<style scoped>

</style>