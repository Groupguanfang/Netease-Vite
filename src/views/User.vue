<template>
  <div class="user padding">
    <div class="home">
      <Title title="我的"></Title>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue"
export default {
  data() {
    return {
      userData:[]
    }
  },
  mounted() {
    try {
      let user = this.$axios.post('/')
    } catch (error) {
      console.log(error);
    }
  },
  components: { Title }
};
</script>

<style>
</style>