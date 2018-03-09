<template>
  <div class="box">
    <!-- mint-ui固定头部组件 -->
    <mt-header fixed title="Vue项目"></mt-header>

		<transition>
			<router-view></router-view>			
		</transition>

    <!-- mui tab栏 -->
    <nav class="mui-bar mui-bar-tab">
      <!-- 路由 -->
			<router-link class="mui-tab-item-user" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-user" to="/user">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">用户</span>
			</router-link>
			<router-link class="mui-tab-item-user"  to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-user" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  }
}
</script>
<style scoped lang="less">
.mint-header{
	z-index: 99;
}
  .box{
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden; 
		/* 解决动画滚动条和撑大盒子的问题*/
	}
	.v-enter-active,
	.v-leave-to {
		transition: all 0.5s ease;
	}
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}

/* mui-item类名和导入的mui.js有冲突，需要重新改名*/
	.mui-bar-tab .mui-tab-item-user {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-user.mui-active{
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-user .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-user .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>