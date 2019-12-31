<template>
  <div id="singContainer">
    <div class="singInfo">
      <h1>{{singItem.name}}</h1>
      <video :src="singItem.url" enable-danmu danmu-btn controls />
      <div class="danmuArea">
        <input type="text" placeholder="请输入弹幕内容" bindinput="getDanmu" :value="danmuTxt"/>
        <button bindtap="sendDanmu">发送弹幕</button>
      </div>
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
  </div>
</template>

<script>

export default {
  data () {
    return {
        singItem:{},
        danmuTxt:''
     }
  },

  onReady: function () {

  },

  
  getDanmu:function(e){
    this.danmuTxt=e.mp.detail.detail.value
  },
  sendDanmu:function(e){
    let text=this.data.danmuTxt
    this.video.sendDanmu({
      text: text,
      color: green
    })
  },
  

  mounted(){
        this.singItem = JSON.parse(this.$mp.query.singItem)
        mpvue.setNavigationBarTitle({
          title: this.singItem.name
        }) 
  },
  
  onShareAppMessage(){
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
     video  
       width 100% 
     .danmuArea
       display flex
       flex-direction row
       input 
         border 1rpx solid #228b22
         height 100rpx
         flex-grow 1
       button 
         color white
         background-color #228b22
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