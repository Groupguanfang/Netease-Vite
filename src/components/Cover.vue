<template>
  <div class="cover">
    <img :src="image" />
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "image"],
};
</script>

<style lang="less" scoped>
.cover {
  height: 170px;
  width: 170px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    border-radius: var(--radius);
  }
  .title {
    position: relative;
    top: -35px;
    left: 15px;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 150px;
    overflow: hidden;
  }
}
</style>