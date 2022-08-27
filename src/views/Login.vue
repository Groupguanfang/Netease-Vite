<template>
  <div class="login padding">
    <img :src="qrcode" alt="qrcode"/>
    <p>使用网易云音乐客户端扫码登录</p>
    <p v-if="show">二维码已过期</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:"",
      password:"",
      qrcode:"",
      show:false
    }
  },
  async mounted() {
    if (localStorage.getItem('cookie') == undefined || localStorage.getItem('cookie') == null || localStorage.getItem('cookie') == '') {
      try {
        // 获取key与二维码
        let action = await this.$axios.get(
            '/login/qr/key'+'?timerstamp='+Date.now()
        );
        let qrcode = await this.$axios.get(
            '/login/qr/create?qrimg=true&key='+action.data.data.unikey+'&timerstamp='+Date.now()
        );
        console.log(qrcode);
        this.qrcode = qrcode.data.data.qrimg;
        // 检测扫描状态
        let timer
        timer = setInterval(async () => {
          let check = await this.$axios.get(
              '/login/qr/check?key='+action.data.data.unikey+'&timerstamp='+Date.now()
          );
          console.log(check);
          if (check.data.code === 800) {
            this.show = true;
            clearInterval(timer);
          }
          if (check.data.code === 803) {
            localStorage.setItem('cookie', check.data.cookie);
            this.$router.push('/user');
            this.$store.commit('loginAction');
            clearInterval(timer);
          }
        }, 3000);
      } catch (error) {
        console.log(error.response);
      }
    } else {
      this.$router.push('/user');
      this.$msg(
          {
            type: 'error',
            title: '您已经登录',
            showClose: false,
            duration: 3000
          }
      );
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