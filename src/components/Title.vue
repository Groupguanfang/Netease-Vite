<template>
  <div class="title">
    <h1>{{ title }}</h1>
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
}
</style>