<template>
  <div id="singContainer">
    <div class="singInfo">
      <h1>{{singItem.name}}</h1>
      <video id="myVideo" :src="singItem.url" :danmu-list="danmuList" enable-danmu danmu-btn controls />
      <div class="danmuArea">
        <input type="text" placeholder="请输入弹幕内容" @blur="getDanmu" v-model="inputValue"/>
        <button @tap="SendDanmu">发送弹幕</button>
      </div>
      <div class="info">
          <p>歌手:{{singItem.singer}}</p>
          <p>片段:{{singItem.section}}</p>
      </div>
    </div>

    <img @tap="handleCollection" :src="!isCollected?'/static/images/collect1.png':'/static/images/collect.png'"/>
    <button open-type="share" class="shareBtn">分享</button>
    <div class="content">
      <article>
          <h2>歌曲介绍</h2>
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
        danmuList:[{text: '第 1s 出现的弹幕',color: '#ff0000',time: 1}],
        isCollected: false,
        inputValue: '',
     }
  },

  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
 

  beforeMount(){
    console.log(this);
    this.index = this.$mp.query.index

    let oldStorage = wx.getStorageSync('isCollected')
    if(!isCollected){
      wx.setStorage({
        key: 'isCollected',
        data: {}
      })
    }else{
      this.isCollected = (oldStorage[this.index]?true:false)
    }
  },
  getDanmu(e){
      this.inputValue = e.detail.value
      console.log(e.detail)
    },
  SendDanmu(){
      this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  methods:{
    handleCollection(){
      let isCollected = !this.isCollected
      this.isCollected = isCollected
      let title = isCollected?'收藏成功':'取消收藏'
      wx.showToast({
        title,
        icon: 'success'
      })

      let oldStorage = wx.getStorageSync('isCollected')
      oldStorage[this.index] = isCollected

      wx.setStorageSync({
        key: 'isCollected',
        data: oldStorage
      })
    },
    getRandomColor() {
      let rgb = []
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = (color.length == 1) ? '0' + color : color
        rgb.push(color)
      }
      return '#' + rgb.join('')
    },
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
     background rgba(255,255,255,0.5)
   img 
     width 90rpx
     height 90rpx
     float right
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