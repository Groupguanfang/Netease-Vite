<template>
  <div class="aside">
    <div class="logo">
      <img src="@/assets/neteaselogo.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.aside {
  border-right: #e0e0e0 1px solid;
  width: 240px;
  height: 100%;
  .logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  img {
    width: 78%;
    margin: 0 10px;
  }
}
</style>