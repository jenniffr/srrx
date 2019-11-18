<template>
  <div>
    <i-grid i-class="no-border"> 
    <i-grid-item v-for="grid in grid" :key="grid" i-class="no-border">
        <i-grid-icon>
            <image src="grid.images" />
        </i-grid-icon>
        <i-grid-label>{{grid.title}}</i-grid-label>
    </i-grid-item>
   
    </i-grid>
    <i-panel :title="title_name">
    <view style="padding: 15px;">
      <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
         <view slot="content">内容不错</view>
         <view slot="footer">尾部内容</view>
      </i-card>
      <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
         <view slot="content">内容不错</view>
         <view slot="footer">尾部内容</view>
      </i-card>
      <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
         <view slot="content">内容不错</view>
         <view slot="footer">尾部内容</view>
      </i-card>
    </view>
    </i-panel>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title_name:"热门",
      grids:[
        {title:"人物",images:"/static/images/1.png"},
        {title:"歌曲",images:"/static/images/2.png"},
        {title:"视频",images:"/static/images/3.png"},
      ],
      top:[
        {name:"歌曲名",singer:"姓名1",image:"图片1"},
        {name:"歌曲名2",singer:"姓名2",image:"图片2"},
        {name:"歌曲名3",singer:"姓名3",image:"图片3"},
      ]
    }
  },
  methods: {
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
