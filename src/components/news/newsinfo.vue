<template>
  <div class="newsInfoBox">
    <h3>{{infoData.title}}</h3>
    <p class="timeClick">
        <span>时间：{{infoData.add_time | dataF}}</span>
        <span>点击：{{infoData.click}}</span>
    </p>
    <div class="content" v-html="infoData.content"></div>
    <subcom :id="id"></subcom>  
  </div>
</template>
<script>
import {Toast} from 'mint-ui';

import subcom from '../subcom/common.vue';

export default {
  data() {
    return {
      id:this.$route.params.id,
      infoData:[]
    };
  },
  created(){
      this.getInfoData();
  },
  components:{
      subcom
  },
  methods:{
      getInfoData(){
          this.$http.get('api/getnew/'+this.id)
          .then((res)=>{
              if(res.body.status === 0){
                  this.infoData = res.body.message[0];
                //   console.log(res.body);
              }else{
                  Toast("请求失败");
              }
          });
      }
  }
}
</script>
<style lang="less" >
  .newsInfoBox{
      padding: 0 3px;
      h3{
         text-align: center;
         color: red;
         font-size: 15px; 
      }
      .timeClick{
          display: flex;
          justify-content: space-between;
          color: #26a2ff;
      }
      .content{
          img{
              width: 100%; 
          }
      }
  }
</style>