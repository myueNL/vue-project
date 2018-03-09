<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodsList" :key="item.id"  @click="goInfo(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="addmore()">加载更多</mt-button>    
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList:[],
      pageIndex:1
    };
  },
  created(){
    this.getInfo();
  },
  methods:{
    getInfo(){
      this.$http.get('api/getgoods?pageindex=' + this.pageIndex)
      .then((res)=>{
        if(res.body.status === 0){
          this.goodsList = this.goodsList.concat(res.body.message);
          // console.log(this.goodsList);
        }
      })
    },
    addmore(){
      this.pageIndex++;
      this.getInfo();
    },
    goInfo(id){
      // this.$router.push('/shop/shopinfo/'+id);
      this.$router.push({ name: 'shopinfo', params: { id: id }});
    }
  }
}
</script>
<style lang="less" scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc;
      margin: 4px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img{
        width: 100%; 
      }
      .title{
        font-size: 14px;
        max-height: 42px;
      }
      .info{
        background-color:#eee;
        p{
          margin: 0;
          padding: 5px;
        }
        .price{
          .now{
            font-size: 16px;
            color: red;
            font-weight: bold;
          }
          .old{
            text-decoration: line-through;
            font-size: 12px;
            margin-left: 10px;
          }
        }
        .sell{
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }
      }
    }
  }
</style>