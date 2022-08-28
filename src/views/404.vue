<template>
  <div class="pg404">
    错误 请检查网络连接 并确保API接口可以正常访问
  </div>
</template>

<script>
export default {
  async mounted() {
    try {
      let network = await this.$axios.get('/inner/version');
      console.log(network);
      this.$router.push('/');
      this.$msg(
          {
            type: 'error',
            title: '请勿手动跳转此页面',
            showClose: false,
            duration: 3000
          }
      );
    } catch(error) {
      console.log(error);
      this.$router.push('/404');
      this.show = false;
    }
  }
}
</script>

<style lang="less" scoped>
.pg404 {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
}
</style>