<template>
  <div id="singContainter">
    <div class="singInfo">
     <h1>{{item.name}}</h1>
     <img :src="item.image" alt="">
     <div class="info">
         <p>歌手:{{item.singer}}</p>
         <p>介绍:{{item.remark}}</p>
     </div>
    </div>
      <button class="shareBtn">分享</button>
    <div class="content">
      <article>
          <h2>歌手简介</h2>
          <section>
          {{item.remark}}
          </section>
      </article>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
        item: {}
    }
  },
  methods: {
    },
  mounted(){
       this.item = JSON.parse(this.$mp.query.item)
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
       margin-left 15%
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