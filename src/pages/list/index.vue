<template>
  <div>
    <i-card @click="goInfo(singItem)" v-for="singItem in list" :key="singItem" i-class="split" :extra="singItem.name" :thumb="singItem.image">
         <view slot="content">片段:{{singItem.section}}</view>
         <view slot="footer">歌手:{{singItem.singer}}</view>
    </i-card> 
  </div>
</template>

<script>
import list from '@/data/singdata.json'

export default {
  data () {
    return {
      list:[]
    }
  },
  onLoad (option){
    console.log(option.type)
    this.list = require('@/data/' + option.type + '.json')
    console.log(option)
  },
  methods: {
    goInfo(singItem){
      mpvue.navigateTo({
        url:'/pages/singInfo/main?singItem=' + JSON.stringify(singItem)
      })
      console.log(singItem)
    }
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