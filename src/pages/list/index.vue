<template>
  <div>
    <i-card v-for="item in list" :key="item" i-class="split" :extra="item.name" :thumb="item.image">
         <view slot="content">片段:{{item.remark}}</view>
         <view slot="footer">歌手:{{item.singer}}</view>
    </i-card>  
  </div>
</template>

<script>

export default {
  data () {
    return {
      list:[]
    }
  },
  onLoad (option){
    console.log(option.type)
    this.list = require('@/data/' + option.type + '.json')
  },

  created () {
  }
}
</script>

<style scoped>
div >>> .split {
  margin-bottom: 10pt;
}
</style>