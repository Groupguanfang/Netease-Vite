<template>
  <div class="home">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      toplist: [],
    };
  },
  async mounted() {
    // 获取榜单
    try {
      let response = await this.$axios.get("/toplist");
      this.toplist = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="less" scoped>
</style>