<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <div class="option"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.option {
  height: 3em;
  display: flex;
  .item {
    background: #f6f6f7;
    display: flex;
    align-items: center;
    border-radius: 100px;
    padding: 8px;
    .title {
      margin-left: 10px;
      margin-right: 5px;
    }
  }
}
</style>