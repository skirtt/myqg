<template>
	<div class="Hcontent">
		<header>
			<div class="h1">
				<a class="fleft">扫一扫</a>
				<div class="h1d">
					<input class="h1text" type="text" placeholder="请输入搜索内容" />
				</div>
				<a class="fright">消息</a>
			</div>
		</header>
		<section>
			<div class="s1">
				<carousel :indicators="false" :auto="3000">
					<div v-for="i in 3"><img class="s1img" src="../assets/1.gif" /></div>
				</carousel>
			</div>
			<div class="s2">
				<div class="s2d">
					<div class="icon">全部分类</div>
					<div class="icon1">浙农馆</div>
					<div class="icon2">零食馆</div>
					<div class="icon3">进口零食</div>
				</div>
			</div>
			<div class="s3">
				<img class="s3img" src="../assets/zt.gif" />
			</div>
			<div class="s4">
				<img class="s4img" src="../assets/tp1.gif" />
				<img class="s4img" src="../assets/tp1.gif" />
				<p class="s4p">
					<router-link to="/" class="a">查看更多店铺</router-link>
				</p>
			</div>
			<div class="s3">
				<img class="s3img" src="../assets/bt1.gif" />
			</div>
			<div class="s4">
				<img class="s4img" src="../assets/tp2.gif" />
				<img class="s4img" src="../assets/tp2.gif" />
				<img class="s4img" src="../assets/tp2.gif" />
			</div>
			<div class="s5">
				<div class="s5d bg">
					<p class="s5p">还有更多商品</p>
				</div>
				<div class="s5d1">
					<div class="s5sp">
						<p class="s5p2"><img class="s5img2" src="../assets/sptp1.gif"/></p>
						<p class="s5p3">土冒礼品卡1000元</p>
						<p class="s5p4">￥<span class="s5sp1">1000.00</span> <img class="s5img1 fright" src="../assets/buys.gif"/></p>
					</div>
					<div class="s5sp">
						<p class="s5p2"><img class="s5img2" src="../assets/sptp1.gif"/></p>
						<p class="s5p3">土冒礼品卡1000元</p>
						<p class="s5p4">￥<span class="s5sp1">1000.00</span> <img class="s5img1 fright" src="../assets/buys.gif"/></p>
					</div>
					<div class="s5sp">
						<p class="s5p2"><img class="s5img2" src="../assets/sptp1.gif"/></p>
						<p class="s5p3">土冒礼品卡1000元</p>
						<p class="s5p4">￥<span class="s5sp1">1000.00</span> <img class="s5img1 fright" src="../assets/buys.gif"/></p>
					</div>
					<div class="s5sp">
						<p class="s5p2"><img class="s5img2" src="../assets/sptp1.gif"/></p>
						<p class="s5p3">土冒礼品卡1000元</p>
						<p class="s5p4">￥<span class="s5sp1">1000.00</span> <img class="s5img1 fright" src="../assets/buys.gif"/></p>
					</div>
				</div>
			</div>
		</section>
		<footer>
			<footer-com></footer-com>
		</footer>
	</div>
</template>

<script>
	import Carousel from 'vue-m-carousel'
	import footer from '../components/footer'

	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			Carousel,
			'footer-com':footer
		},
		created:function(){
			console.log('vue实例化完成');
		}
	}
</script>

<style>
	
	.h1 {
		height: 127px;
		opacity: 0.5;
		background-color: rgba(213, 215, 210, 0.5);
	}
	
	.h1>a {
		color: white;
		font-size: 40px;
	}
	
	.h1d {
		display: inline-block;
		background-color: #efeff1;
		width: 792px;
		height: 86px;
		border-radius: 5px;
	}
	
	.h1text {
		border: 0;
		background-color: transparent;
		outline: none;
		height: 86px;
		line-height: 86px;
		text-align: center;
		width: 100%;
	}
	
	.s1img {
		width: 1080px;
		height: 441px;
	}
	
	.s2 {
		height: 245px;
		background-color: white;
	}
	
	.s2d {
		display: flex;
	}
	
	.s2d>div {
		flex: 1;
		font-size: 34px;
		padding-top: 166px;
	}
	
	.s3 {
		margin-top: 40px;
		background-color: white;
	}
	
	.s3img {
		width: 1080px;
	}
	
	.s4 {
		text-align: center;
		background-color: white;
	}
	
	.s4img {
		margin: 7px 0;
		width: 1052px;
	}
	
	.s4p {
		height: 158px;
		line-height: 158px;
		font-size: 38px;
		color: #1b1b1b;
	}
	
	.a {
		font-size: 38px;
		color: #1b1b1b;
		text-decoration: none;
	}
	
	.bg {
		background: url(../assets/bg1.gif) no-repeat center 55px;
		background-size: 654px 1px;
	}
	
	.s5p {
		padding-top: 35px;
		font-size: 36px;
		color: #747474;
		padding-bottom: 45px;
	}
	
	.s5d1 {
		/*display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: space-around;*/
		align-items: center;
	}
	
	.s5sp {
		width: 520px;
		height: 728px;
		background-color: white;
		display: inline-block;
		margin: 15px 4px;
		position: relative;
	}
	
	.s5p2{
		text-align: center;
		
	}
	
	.s5img2{
		width: 520px;
	}
	
	.s5p3{
		font-size: 36px;
		color: black;
		text-indent: 25px;
		line-height: 48px;
		text-align: left;
		margin-top: 20px;
	}
	
	.s5p4{
		position: absolute;
		bottom: 3px;
		text-indent: 18px;
		color: #9f1e0b;
		text-align: left;
		width: 100%;
		font-size: 18px;
	}
	
	.s5sp1{
		font-size: 44px!important;
	}
	
	.s5img{
		width: 325px;
	}
	
	.s5img1{
		width: 65px;
		height: 64px;
		padding-right: 13px;
	}
	
	
</style>