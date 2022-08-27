<template>
  <div class="ppt">
    <div class="big-image">
      <img :src="bigImage" />
    </div>
    <div class="small-image">
      <div
          @click="action(item.targetId,item.targetType)"
          @onFocus="setBigImage(item.imageUrl)"
          class="container"
          v-focusable
          :key="index"
          v-for="(item,index) in allImage"
      >
        <img :src="item.imageUrl"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allImage:[],
      bigImage: '',
    }
  },
  methods: {
    setBigImage(src) {
      this.bigImage = src;
    },
    action(id,type) {
      if (type == 1) {
        console.log(id);
      }
    }
  },
  async mounted() {
    let ppt = await this.$axios.get('/banner');
    console.log(ppt);
    this.allImage = ppt.data.banners;
    this.bigImage = this.allImage[0].imageUrl;
  }
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
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
  .container.focus {
    transform: scale(1.1);
    transition: ease 0.2s;
  }
}
</style>