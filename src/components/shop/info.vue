<template>
  <div class="shopinfo-box">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :imgData="imgData"></swiper>  
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <!--内容区-->
      <div class="mui-card-content">
         <div class="mui-card-content-inner">
           <p class="price">
             市场价：<del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;
             销售价：<span class="now_price">￥{{goodsInfo.sell_price}}</span>
           </p>
           <p>购买数量：<number :quantity="goodsInfo.stock_quantity"></number> </p>
           <p>
             <mt-button type="primary" size="small">立即购买</mt-button>
             <mt-button type="danger" size="small">加入购物车</mt-button>  
           </p>
         </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsInfo.goods_no}}</p>
          <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsInfo.add_time | dataF}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from '../subcom/swiper.vue';
import number from '../subcom/number.vue';

export default {
  data() {
    return {
      imgData:[],
      id:this.$route.params.id,
      goodsInfo:[]
    };
  },
  components:{
    swiper,
    number
  },
  created(){
    this.getLunBo();
    this.getGoodsInfo();
  },
  methods:{
    getLunBo(){
      this.$http.get('api/getthumimages/' +this.id)
      .then((res)=>{
        if(res.body.status === 0 ){
          this.imgData = res.body.message;
          // console.log(this.imgData)
        }
      });
    },
    getGoodsInfo(){
      this.$http.get('api/goods/getinfo/' + this.id)
      .then((res)=>{
        if(res.body.status ===0){
          this.goodsInfo = res.body.message[0];
          console.log(this.goodsInfo);
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .shopinfo-box{
    background-color: #eee;
    overflow: hidden;
    min-height: 500px;
    .now_price{
      color: red;
      font-size: 16px;
      font-weight: bold;
    }
    .mui-card-footer{
      display: block;
      button{
        margin: 15px 0;
      }
    }
  }
</style>