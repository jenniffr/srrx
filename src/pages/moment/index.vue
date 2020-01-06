 <template>
 <div>
    <view class="bar">
        <input type="text" v-model="searchString" placeholder="高雅不冬眠" />
        <span @click="handleClear" class="clear" v-show="searchString">×</span>
    </view>
    <div class="content">   
        <view class="name" @click="goInfo(singItem)" v-for="singItem in filteredSingItems" :key="singItem">
            <a :href="singItem.url"><img :src="singItem.image" /></a>
            <p>{{singItem.name}}</p>
        </view>
    </div>
 </div>
</template>


<script>
import singdata from '@/data/singdata.json'

export default {
  data: {
      searchString: "",
      singItems:singdata,
  },

  computed: {
    filteredSingItems: function () {
        var singItems_array = this.singItems,
            searchString = this.searchString;

        if(!searchString){
            return singItems_array;
        }

        searchString = searchString.trim().toLowerCase();

        singItems_array = singItems_array.filter(function(item){
            if(item.name.toLowerCase().indexOf(searchString) !== -1){
                return item;
            }
        })
        return singItems_array;;
    }
  },

  methods: {
    goInfo(singItem){
      mpvue.navigateTo({
        url:'/pages/singInfo/main?singItem=' + JSON.stringify(singItem)
      })
      console.log(singItem)
    },
    handleClear(){
      this.searchString = ''
    },
  }
}
</script>

 <style>
  .bar{
     width: 80%;
     height: 80rpx;
     margin: auto; 
     border-bottom: 1rpx solid #228B22;
     position: relative;
  }
  .bar input{
      width: 87%;
      line-height: 19px;
      padding: 11px 0;

      border-radius: 2px;
      text-align: center;
      font-size: 28px;
      color: #228B22;
      font-weight: bold;
      outline: none;
      text-indent: 40px;     
  }
  .bar placeholder{
    text-decoration-color: #228b22;
  } 
  .clear{
      position: absolute;
      right: 20rpx;
      top: 20rpx;
      z-index: 30;
  }
  .content{
      list-style: none;
      width: 428px;
      margin: 0 auto;
      text-align: left;
  }

  .name{
      border-bottom: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;
  }

  .name img{
      width:60px;
      height:60px;
      float:left;
      border:none;
  }

  .name p{
      margin-left: 75px;
      font-weight: bold;
      padding-top: 12px;
      color:#6e7a7f;
  }
  </style>



