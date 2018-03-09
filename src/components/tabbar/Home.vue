<template>
  <div>
      <swiper :imgData="imgData"></swiper>

      <!-- mui grid插件 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <router-link to="/news/newslist">
		                    <img src="../../imgs/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/photo/share">
		                    <img src="../../imgs/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/shop/list">
		                    <img src="../../imgs/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../imgs/menu4.png" alt="">
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../imgs/menu5.png" alt="">
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                 <img src="../../imgs/menu6.png" alt="">
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
  </div>
</template>
<script>
import {Toast} from 'mint-ui';
import swiper from '../subcom/swiper.vue';

export default {
  data() {
    return {
      imgData:[]
    }
  },
  created(){
    this.getImgData();
  },
  components:{
    swiper
  },
  methods:{
      getImgData(){
        this.$http.get('api/getlunbo')
        .then((res)=>{
          if(res.body.status == 0){
            // console.log(res.body);
            this.imgData = res.body.message;
          }else{
            Toast('请求失败');
          }
        })
      }
    }
};
</script>
<style scoped lang="less">

.mui-grid-view.mui-grid-9{
  border:0;
  background: #fff;
}
.mui-grid-view.mui-grid-9 .mui-media{
  background: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:0;
  img{
    width:60px;
    height:60px;
  }
}
</style>