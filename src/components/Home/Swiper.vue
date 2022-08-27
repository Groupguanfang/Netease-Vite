<template>
  <div class="ppt">
    <div class="big-image">
      <div class="panel">
        <h1>{{ greet }}</h1>
        <div>{{ tips }}</div>
      </div>
      <div class="img" :style="{ backgroundImage: 'linear-gradient(209deg, rgb(0 0 0 / 0%), #ffffffdb),url('+bigImage+')' }"></div>
    </div>
    <div class="small-image">
      <div
          @click="action(item.targetId,item.targetType)"
          @onFocus="setBigImage(item.imageUrl,item.typeTitle)"
          @mouseover="setBigImage(item.imageUrl,item.typeTitle)"
          class="container"
          v-focusable
          :key="index"
          v-for="(item,index) in allImage"
      >
        <img :src="item.imageUrl" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allImage:[],
      bigImage: "",
      greet:"",
      tips:""
    }
  },
  methods: {
    setBigImage(src,title) {
      this.bigImage = src;
      this.tips = title;
      document.querySelector('main').scrollTop = 0;
    },
    action(id,type) {
      if (type == 1) {
        console.log(id);
      }
    }
  },
  async mounted() {
    let now = new Date(),hour = now.getHours()
    if(hour < 6){this.greet = '凌晨好'}
    else if (hour < 9){this.greet = '早上好'}
    else if (hour < 12){this.greet = '上午好'}
    else if (hour < 14){this.greet = '中午好'}
    else if (hour < 17){this.greet = '下午好'}
    else if (hour < 19){this.greet = '傍晚好'}
    else if (hour < 22){this.greet = '晚上好'}
    else {this.greet = '夜深了'}
    let ppt = await this.$axios.get('/banner');
    console.log(ppt);
    this.allImage = ppt.data.banners;
    this.bigImage = this.allImage[0].imageUrl;
    this.tips = this.allImage[0].typeTitle;
  }
}
</script>

<style lang="less" scoped>
.ppt {
  position: relative;
}
img {
  width: 100%;
}
.img {
  height: 50vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.big-image {
  position: relative;
  .panel {
    position: absolute;
    z-index: 999;
    width: 100%;
    padding: 120px 40px;
    padding-bottom: 0;
  }
}
.small-image {
  display: flex;
  transition: ease 0.2s;
  gap: 8px;
  padding: 0 8px;
  position: absolute;
  transform: translateY(-34px);
  .container img {
    border-radius: 8px;
  }
  .container.focus,.container:hover {
    transform: scale(1.1);
    transition: ease 0.2s;
  }
}
</style>