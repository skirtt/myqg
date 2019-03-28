<template>
	<div class="main">
		 <div class="zhuce_1">
            <router-link to="/me"> <img src="../assets/img/jiantou.gif"/></router-link>
            <div class="zhuce_1_1">完成注册</div>
        </div>
		<form class="zhuce_3">
			<input type="text" v-model="namea"  placeholder="设置账号"/>
			<input type="password" v-model="pwda"  placeholder="设置密码"/>
			<input type="button" value="注册" @click="zhuche" />
			<router-link to="/login" class="zhuce">已有账号？马上登录</router-link>
		</form>
		
	</div>
</template>
<style>
    @import url("../assets/css/global.css");
    @import url("../assets/css/zhuce.css");
</style>
<script>
	export default{
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				namea:'',
				pwda:''
			}
		},methods:{
			zhuche:function(){
				console.log(this.namea);
				console.log(this.pwda);
				this.axios({
					method:'post',
					url:'/api/users/zhuche',
					data:{
						username:this.namea,
						password:this.pwda
					}
				}).then(function(res){
					console.log(res);
					alert(res.data.message);
					location.reload();
				}).catch(function(err){
					console.log(err);
				})
			}
		}
	}
</script>

<style>
</style>