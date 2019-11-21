<template>
  <div>
    <i-grid i-class="no-border"> 
    <i-grid-item @click="goType(grid)" v-for="grid in grids" :key="grid" i-class="no-border">
        <i-grid-icon>
            <image :src="grid.image" />
        </i-grid-icon>
        <i-grid-label>{{grid.title}}</i-grid-label>
    </i-grid-item>
   
    </i-grid>
    <i-panel :title="title_name">
    <view style="padding: 15px;">
      <i-card v-for="item in top" :key="item" i-class="split" :extra="item.name" :thumb="item.image">
         <view slot="content">{{item.remark}}</view>
         <view slot="footer">{{item.singer}}</view>
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
        {title:"人物",image:"/static/images/1.png"},
        {title:"歌曲",image:"/static/images/2.png"},
        {title:"视频",image:"/static/images/3.png"}
      ],
      top:[
        {name:"歌曲名1",singer:"姓名1",image:"https://i.loli.net/2017/08/21/599a521472424.jpg",remark:"介绍1"},
        {name:"歌曲名2",singer:"姓名2",image:"https://i.loli.net/2017/08/21/599a521472424.jpg",remark:"介绍2"},
        {name:"歌曲名3",singer:"姓名3",image:"https://i.loli.net/2017/08/21/599a521472424.jpg",remark:"介绍3"}
      ]
    }
  },
  methods: {
    goType(type){
      console.log(type)
      let url = '../list/main?type=' + type.title
      mpvue.navigateTo({ url })
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
