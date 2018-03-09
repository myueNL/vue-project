<template>
  <div class="common">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入内容(不多于100字)" v-model.trim="textValue"></textarea>
    <mt-button type="primary" size="large" @click="posted()">发表评论</mt-button>
    <div class="container">
        <div class="container-box" v-for="(item,index) in listData" :key="index">
          <div class="container-title">
            第{{index+1}}楼：{{item.user_name}} 发表时间：{{item.add_time | dataF}}
          </div>  
          <div class="container-neirong">
            {{item.content?item.content:"该用户未输入内容"}}
          </div> 
        </div>
    </div>
    <mt-button type="danger" size="large" plain @click="addmore()">加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui';

export default {
  data() {
    return {
      listData:[],
      pageIndex:1,
      textValue:null     
    };
  },
  props:["id"],
  created(){
    this.getListData();
  },
  methods:{
    getListData(){
      this.$http.get('api/getcomments/'+this.id + '?pageindex='+this.pageIndex)
      .then((res)=>{
        if(res.body.status === 0 && res.body.message.length){
          this.listData = this.listData.concat(res.body.message);
          // console.log(res.body)
        }else {
          Toast("请求失败");
        }
      })
    },
    addmore(){
      this.pageIndex++;
      this.getListData();
    },
    posted(){
      this.$http.post('api/postcomment/' + this.$route.params.id,{content:this.textValue})
      .then((res)=>{
        this.listData.unshift({
          content:this.textValue,
          user_name:'匿名用户',
          add_time:new Date()
        });
        this.textValue = null;
      });
    }
  }
}
</script>
<style lang="less" scoped>
  .common{
    h3{
      color: #000;
      text-align-last: left;
      font-size: 16px;
    }
    hr{
      margin: 10px 0;
    }
    textarea{
      margin: 10px 0;
      font-size: 14px;
    }
    .container {
      padding: 0;
      margin: 5px 0;
      .container-box{
        font-size: 13px;
        .container-title{
          background-color: #ccc;
          line-height: 25px;
        }
        .container-neirong{
          line-height: 25px;
        }
      }
    }
  }
</style>