<template>
  <div class="login">
    <p>
      <input v-focusable placeholder="手机号" type="text" id="username" v-model="username" />
    </p>
    <p>
      <input v-focusable placeholder="密码" type="text" id="password" v-model="password" />
    </p>
    <button v-focusable>登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:"",
      password:"",
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    transition: ease 0.2s;
  }
  input.focus {
    transform: scale(1.1);
    transition: ease 0.2s;
  }
}
</style>