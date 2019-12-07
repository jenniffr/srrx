<template>
  <div id="searchContainer">
    <div class="searchHeader">
      <input @confirm="handleSearch" confirm-type="搜索" v-model="searchContent" type="text" placeholder="高雅不冬眠" placeholder-class="placeholder">
      <span @click="handleClear" class="clear" v-show="searchContent">×</span>
    </div>
    
  </div>
</template>

<script>
import List from '../list/index'

export default {
  components: {List},
  data () {
    return {
      searchContent: '',
      singsArr: []
    }
  },
  methods: {
    handleClear(){
      this.searchContent = ''
    },
    handleSearch(){
      wx.request({
        url: 'http//localhost:8080/searchSings',
        data,
        succcess: (res) => {
          this.singsArr = res.data
        }
      })
    }
  },

  created () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer

   .searchHeader
     width 80%
     height 80rpx
     margin auto 
     border-bottom 1rpx solid #228B22
     position relative
     input 
       height 100%
       width 100%
     .placeholder
       color #228b22
       text-align center
       font-size 28rpx
     .clear
       position absolute
       right 20rpx
       top 20rpx
       z-index 99
</style>