<template>
  <div id="firstView">
      <swiper @change="handleChange" :indicator-dots="index !== 1" indicator-color="pink" indicator-active-color="green">
          <swiper-item>
              <img src="/static/images/bz2.jpg" alt="">
          </swiper-item>
          <swiper-item>
              <img src="/static/images/bz3.png" alt="">
          </swiper-item>
      </swiper>
      <button @click="toIndex" class="btn" v-show="index === 1">开启声入人心之旅</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        index: 0
    }
  },
  methods: {
      handleChange(event) {
          //console.log(event);
          this.index = event.mp.detail.current
      },
      toIndex() {
        wx.switchTab({
          url: '/pages/index/main'
        })
      }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #firstView
    width 100%
    height 100%
    swiper
      width 100%
      height 100%
      img 
        width 100%
        height 100%
    .btn
      width 420rpx
      height 80rpx
      text-align center
      line-height 80rpx
      position absolute
      bottom 20rpx
      left 40%
      margin-left -140rpx
      background rgba(255,255,255,0.5)
</style> 