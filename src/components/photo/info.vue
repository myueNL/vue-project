<template>
  <div class="imginfobox">
    <h2>{{infoData.title}}</h2>
    <div class="titletime">
        <span>{{infoData.add_time | dataF}}</span>
        <span>{{infoData.clcik}}</span>
    </div>
    <img class="preview-img" v-for="(item,index) in imgData" :key="index"
        :src="item.src" @click="$preview.open(index,imgData)" height="100">
    <div v-html="infoData.content" class="content" ></div>
  <subcom :id="id"></subcom>
  </div>
</template>
<script>
import subcom from '../subcom/common.vue';

export default {
  data() {
    return {
      infoData:{},
      id:this.$route.params.id,
      imgData:[]
    };
  },
  components:{
      subcom
  },
  created(){
    this.getInfo();
    this.getImg();
  },
  methods:{
      getInfo(){
          this.$http.get('api/getimageInfo/' + this.id)
          .then((res)=>{
              if(res.body.status === 0){
                  this.infoData = res.body.message[0];
                //   console.log(this.infoData);
              }
          })
      },
      getImg(){
          this.$http.get('api/getthumimages/'+this.id)
          .then((res)=>{
              if(res.body.status ===0){
                  res.body.message.forEach((item) => {
                      item.w=600;
                      item.h=400;
                  });
              }
                  this.imgData = res.body.message;       
                //   console.log(this.imgData);       
          })
      }
  }
}
</script>
<style lang="less" scoped>
  .imginfobox{
      margin: 0 3px;
      h2{
          color: #26a2ff;
          font-size: 15px;
          text-align: center;
      }
      .titletime{
          display: flex;
          justify-content: space-between;
      }
      .content{
          font-size: 14px;
      }
      .preview-img{
          margin: 2px;
      }
  }
</style>