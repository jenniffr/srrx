<template>
  <div id="mineContainer">
    <div class="header">
      <img :src="userInfo.avatarUrl?userInfo.avatarUrl:''" alt="">
      <button open-type="getUserInfo" @getuserinfo="handleGetUserInfo">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
    </div>
    <div class="cardList">
      <div class="card">
        <span>我的收藏</span>
        <span class="more"> > </span>
      </div>
    </div>
    <i-panel title="我要推荐">
    <i-input :value="name" @change="changeName($event)" title="歌曲名称" autofocus placeholder="名称" maxlength="20"/>
    <i-input :value="remark" @change="changeRemark($event)" title="歌曲介绍" placeholder="地址" maxlength="20" />
    <i-input :value="singer" @change="changeSinger($event)" title="演唱歌手" placeholder="介绍" maxlength="50" />
    <i-button @click="handleClick()">我要推荐</i-button>
    <i-toast id="toast" />
    </i-panel>
  </div>
</template>

<script>
const { $Toast } = require('../../../static/dist/base/index');

export default {
  data () {
    return {
      userInfo: {},
      name: "",
      remark: "",
      singer: ""
    }
  },
  methods: {
    handleGetUserInfo(res){
      if(res.mp.detail.userInfo){
        this.userInfo = res.mp.detail.userInfo
      }
    },
    changeName(event) {
      console.log(event)
      this.name = event.mp.detail.detail.value
    },
    changeRemark(event) {
      console.log(event)
      this.remark = event.mp.detail.detail.value
    },
    changeSinger(event) {
      console.log(event)
      this.singer = event.mp.detail.detail.value
    },
    handleClick() {
      if (this.name && this.remark && this.singer) {
        let event = {
          name: this.name,
          remark: this.remark,
          singer: this.singer,
          image: 'cloud://srrx-d9c483.7372-srrx-d9c483/1.1.png'
        }
        wx.cloud.callFunction({ name: 'new_sing', data: event }).then(
              res => {
                console.log(res)
                }
        )
        $Toast({
            content: '数据已经提交',
            type: 'success'
        });
      } else {
        $Toast({
            content: '请填写完整信息',
            type: 'warning'
        });
      }
    }
  },
  mounted(){
    wx.getUserInfo({
      success: (res) => {
        console.log(res.userInfo);
        this.userInfo = res.userInfo
      },
      fail: () => {
        console.log('获取失败');
      }
    })
  },

  created () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#mineContainer
  .header 
    padding 40rpx
    background #228B22
    img
      width 100rpx
      height 100rpx
      vertical-align middle
      border-radius 50rpx
    button 
      display inline-block
      height 60rpx
      line-height 60rpx
      background rgba(255, 255, 255, 0.5)
      vertical-align middle
      margin-left 40rpx
      max-width 200rpx
  .cardList
    .card
      width 92%
      height 60rpx
      line-height 60rpx
      margin 10rpx auto 
      border 1rpx solid #eee
      padding 10rpx
      .more
        float right
</style>