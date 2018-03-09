<template>
  <div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
            <router-link :to="'/news/newsinfo/' + item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
                <h3>{{item.title}}</h3>
                <p class="mui-ellipsis">
                <span> 时间 :{{item.add_time | dataF}}</span>
                <span>点击：{{item.click}}</span>
                </p>
            </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
import {Toast} from 'mint-ui';

export default {
  data() {
    return {
      newsList:[]
    };
  },
  created(){
      this.getNewsList();
  },
  methods:{
    getNewsList(){
        this.$http.get("api/getnewslist")//有前缀不要在前面加/
        .then((res)=>{
            if(res.body.status === 0){
                this.newsList = res.body.message;
                // console.log(res.body);
            }else{
                Toast("请求失败");
            }
        })
    }        
  }
}
</script>
<style lang="less" scoped>
  .mui-table-view{
      h3 {
          font-size: 14px;
          font-weight: normal;
      }
      .mui-ellipsis{
        color: #26a2ff;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }
  }

</style>