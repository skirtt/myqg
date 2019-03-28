<template>
    <div class="main">
        <div class="me_1">
          <img src="../assets/img/weibo.gif"/>
          <img src="../assets/img/weixin.gif"/>
          <img src="../assets/img/qq.gif"/>
          <img src="../assets/img/xian.gif"/>
          <router-link to="/login" class="tiaozhuan"><input type="button" value="登录/注册"/></router-link>
        </div>
        <div class="me_2">
            <div class="me_2_1">
				<div class="me_2_1_div">
					<div class="dianji1"><img src="../assets/img/shoucang.gif" /><span>我的收藏</span></div>
				</div>
				<div class="me_2_1_div">
					<div class="dianji1"><img src="../assets/img/pinglun.gif" /><span>我的评论</span></div>
				</div>
				<div class="me_2_1_div">
					<div class="dianji1"><img src="../assets/img/jifenzhongxin.gif" /><span>积分中心</span></div>
				</div>
				<div class="me_2_1_div" style="border-bottom: none;">
					<div class="dianji1"><img src="../assets/img/liping.gif" /><span>我的礼品</span></div>
				</div>
            </div>
            <div class="me_2_2">
				<div class="me_2_1_div">
					<div class="dianji1"><img src="../assets/img/xinxi.gif" /><span>个人信息</span></div>
				</div>
				<div class="me_2_1_div" style="border-bottom: none;">
					<div class="dianji1"><img src="../assets/img/shezhi.gif" /><span>设置</span></div>
				</div>
            </div>
        </div>
        <div class="me_3">
    <div class="me_3_1">
      <div class="me_3_img"><img src="../assets/img/diaiyan.gif"/></div>
     <router-link to='/shouye' class="me_2_font">Daily</router-link>
    </div>
    <div class="me_3_2" @click="dianji">
          <div class="me_3_img"><img src="../assets/img/Allan.gif"/></div>
           <router-link to='/zhuye' class="me_2_font">All</router-link>
    </div>
    <div class="me_3_2" @click="dianji">
         <div class="me_3_img"><img src="../assets/img/meliang.gif"/></div>
         <div class="me_1_font">Me</div>
    </div>
  </div>
    </div>
</template>

<style>
    @import url("../assets/css/global.css");
    @import url("../assets/css/me.css");
</style>
