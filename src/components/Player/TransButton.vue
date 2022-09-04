<template>
  <div class="tran-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TransButton"
}
</script>

<style lang="less" scoped>
.tran-button {
  background: #ffffff50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30%;
  padding: 18px;
  height: 100%;
  &.focus {
    transform: scale(1.1);
    background: #ffffffed;
  }
}
.icon {
  width: 48px;
  height: 48px;
}
</style>