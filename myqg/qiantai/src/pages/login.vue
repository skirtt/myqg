<template>
	<div class="main">
		<div class="denglu_1">
           <router-link to="/me"> <img src="../assets/img/jiantou.gif"/></router-link>
            <div class="denglu_1_1">登录</div>
        </div>
		<form class="denglu_2">
			 <div class="font_1">使用myGQ通行证登录</div>
			<input type="text" v-model="namea" placeholder="账号/邮箱"/>
			<input type="password" v-model="pwda" placeholder="密码"/>
			 <div class="wangji">忘记密码</div>
			<input type="button" value="登陆" @click="login" />
			<router-link to="/register" class="denglu">没有账号？现在注册</router-link>
		</form>
	</div>
</template>


<style>
    @import url("../assets/css/global.css");
    @import url("../assets/css/denglu.css");
</style>
<script>
	import axios from 'axios'
	export default{
		name: 'index',
		data() {
			return {
				namea:'',
				pwda:''
			}
		},methods:{
			login:function(){
				axios({
					method:'get',
					url:'/api/users/login',
					data:{
						username:this.namea,
						password:this.pwda
					},
					params:{
						username:this.namea,
						password1:this.pwda 
					}
				}).then(function(result){
					console.log(result);
					alert(result.data.message);
				}).catch(function(err){
					console.log(err);
				})
			}
		}
	}
</script>

<style>
</style>