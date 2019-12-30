<template>
  <div>
    <swiper
      :indicator-dots="indicatorDots"
      indicator-color="pink" 
      indicator-active-color="green"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="img in imgUrls" :key="img">
        <swiper-item>
          <image :src="img" style="height:100%" />
        </swiper-item>
      </block>
    </swiper>

    <i-grid i-class="no-border"> 
    <i-grid-item @click="goType(grid.type)" v-for="grid in grids" :key="grid" i-class="no-border" >
        <i-grid-icon>
            <image :src="grid.image" />
        </i-grid-icon>
        <i-grid-label>{{grid.title}}</i-grid-label>
    </i-grid-item>
    </i-grid>

    <i-panel title="热门歌曲">
    <view style="padding: 15px;">
      <i-card @click="goInfo(singItem)" v-for="singItem in top" :key="singItem" i-class="split" :extra="singItem.name" :thumb="singItem.image">
         <view slot="content">片段:{{singItem.remark}}</view>
         <view slot="footer">歌手:{{singItem.singer}}</view>
      </i-card>
    </view>
    </i-panel>
  </div>
</template>

<script>
import card from '@/components/card'
import top from '@/data/top.json'

export default {
  data () {
    return {
      grids:[
        {title:"音乐剧",image:"/static/images/1.png",type:1},
        {title:"歌剧",image:"/static/images/2.png",type:2},
        {title:"流行",image:"/static/images/3.png",type:3}
      ],
      top:top,
      imgUrls: [
        'http://5b0988e595225.cdn.sohucs.com/images/20181216/c7d3e703c8c14c378c32e4c0ace00a8d.jpeg',
        'http://image.juooo.com/group1/M00/01/DB/rAoKmVw77K-ALkeHAAFc5XQmwJI692.jpg',
        'https://img.rednet.cn/2019/01-21/50788649-5f11-4b2b-bd32-56d1790cd6e7.jpg',
        'https://img.rednet.cn/2019/01-21/a8384c2c-a806-4341-a486-9e9ea3d708f6.jpg'
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  },

  component: {
    card
  },

  
 
  methods: {
    goType(type){
      console.log(type)
      let url = '../list/main?type=' + type
      mpvue.navigateTo({ url })
    },
    goInfo(singItem){
      mpvue.navigateTo({
        url:'/pages/singInfo/main?singItem=' + JSON.stringify(singItem)
      }) 
    }
  },

  created () {
  }
}
</script>

<style scoped>
div >>> .no-border {
  border-width: 0pt;
}
div >>> .split {
  margin-bottom: 10pt;
}
</style>
