<template>
	<div class="Hcontent">
		<header>
			<div class="h1">
				<p class="h1p">全部分类</p>
			</div>
		</header>
		<section>
			<div class="s1">
				<div class="s1d ys">零食</div>
				<div class="s1d">零食</div>
				<div class="s1d">零食</div>
				<div class="s1d">零食</div>
				<div class="s1d">零食</div>
				<div class="s1d">零食</div>
			</div>
			<div class="s2">
				
			</div>
		</section>
		<footer>
			<footer-com></footer-com>
		</footer>
	</div>
</template>

<script>
	import footer from '../components/footer'
	export default {
		name: 'category',
		data() {
			msg: 'hahahaha'
		},
		components: {
			'footer-com': footer
		}
	}
</script>

<style>
	.h1{
		border-bottom: 1px solid #e5e5e5;/*px*/
	}
	
	.h1p{
		font-size:48px;
		color: #020202;
		text-align: center;
		height: 125px;
		line-height: 125px;
		display: inline-block;
		
	}
	
	.ys{
		border-left: 7px solid #a61600!important;
		color: #a61600!important;
		background-color: white;
	}
	
	.s1{
		width: 200px;
		background-color: #efefef;
		font-size: 40px;
		color: #060606;
	}
	
	.s1d{
		border-left: 7px solid transparent;
		line-height: 170px;
		height: 170px;
		width: 191px;
		border-bottom: 1px solid #dfdfdf;/*px*/
	}
	
	.s2{
		width: 878px;
	}
	
	.Hcontent{
		background-color: transparent;
	}
</style>