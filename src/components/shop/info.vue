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
      <!--页眉，放置标题-->
      <div class="mui-card-header">页眉</div>
      <!--内容区-->
      <div class="mui-card-content">内容区</div>
    </div>

    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">页眉</div>
      <!--内容区-->
      <div class="mui-card-content">内容区</div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>
<script>
import swiper from '../subcom/swiper.vue';

export default {
  data() {
    return {
      imgData:[],
      id:this.$route.params.id
    };
  },
  components:{
    swiper
  },
  created(){
    this.getLunBo();
  },
  methods:{
    getLunBo(){
      this.$http.get('api/getthumimages/' +this.id)
      .then((res)=>{
        if(res.body.status === 0 ){
          this.imgData = res.body.message;
          console.log(this.imgData)
        }
      });
    }
  }
}
</script>
<style lang="css" scoped>
  .shopinfo-box{
    background-color: #eee;
    overflow: hidden;
    min-height: 500px;
  }
</style>