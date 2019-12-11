<template>
  <div id="singContainer">
    <div class="singInfo">
      <h1>{{singItem.name}}</h1>
      <img :src="singItem.image" alt="">
      <div class="info">
          <p>歌手:{{singItem.singer}}</p>
          <p>介绍:{{singItem.remark}}</p>
      </div>
    </div>
    <button open-type="share" class="shareBtn">分享</button>
    <div class="content">
      <article>
          <h2>歌手简介</h2>
          <section>
          {{singItem.remark}}
          </section>
      </article>
    </div>
    <div>
      <audio :name="singItem.name" :src="singItem.src" id="myAudio" controls loop></audio>

      <button type="primary" bindtap="audioPlay">播放</button>
      <button type="primary" bindtap="audioPause">暂停</button>
      <button type="primary" bindtap="audio14">设置当前播放时间为14秒</button>
      <button type="primary" bindtap="audioStart">回到开头</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        singItem: {}
     }
  },
  onReady (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.play()
  },
  methods: {
    audioPlay: function () {
      this.audioCtx.play()
    },
    audioPause: function () {
      this.audioCtx.pause()
    },
    audio14: function () {
      this.audioCtx.seek(14)
    },
    audioStart: function () {
      this.audioCtx.seek(0)
    }
  },
  
  mounted(){
        this.singItem = JSON.parse(this.$mp.query.singItem)
        mpvue.setNavigationBarTitle({
          title: this.singItem.name
        }) 
  },
  shareAppMessage(){
    console.log('用户点击转发');
  },

  created () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #singContainer
   .singInfo
     display flex
     flex-direction column
     h1  
       text-align center
       font-size 40rpx
       font-weight bold
       margin 10rpx 0
     img
       width 70%
       height 700rpx
       margin 0 auto  
     .info
       margin-left 5%
       p
         line-height 50rpx
   .shareBtn
     width 300rpx
     height 80rpx
     line-height 80rpx
     text-align center
     margin 20rpx auto 
   .content
     margin 30rpx
     article 
       margin-top 50rpx
       h2
         font-size 30rpx
         font-weight bold
         color #02a774
         text-align center
       section 
         font-size 28rpx
         text-indent 28rpx
</style>