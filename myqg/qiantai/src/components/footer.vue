<template>
	<div class="footer">
		<div class="fd1">
			<div class="icon_f1">广场</div>
			<div class="icon_f2">分类</div>
			<div class="icon_f3">区域馆</div>
			<div class="icon_f4">购物车</div>
			<div class="icon_f5">我的</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footer-com',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		/*background-color: red;*/
	}
	
	.fd1 {
		display: flex;
		flex-wrap: nowrap;
		/*position: fixed;
		bottom: 0;*/
		text-align: center;
		background-color: #fcffff;
	}
	
	.fd1>div {
		flex: 1;
		justify-content: flex-start;
		text-align: center;
		font-size: 28px;
		padding-top: 80px;
		padding-bottom: 10px;
	}
</style>