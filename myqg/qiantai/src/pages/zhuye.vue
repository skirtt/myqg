<template lang="html">
	<div>
		<div class="zhuye_1"><img src="../assets/img/toubu.gif"/></div>
	<div class="lunbo_1">
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/img/lunbo.gif"/></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/img/lunbo.gif"/></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/img/lunbo.gif"/></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/img/lunbo.gif"/></div>
        </CarouselItem>
    </Carousel>
    </div>
    <div class="zhuye_2">
    	<div class="zhuye_img">
    	<img src="../assets/img/yuan_1.gif" />
    	<img src="../assets/img/yuan_2.gif" />
    	<img src="../assets/img/yuan_3.gif" />
    	<img src="../assets/img/yuan_4.gif" />
    	</div>
    	<div class="zhuye_3">
    	 <img src="../assets/img/kapian.gif" />
    	 <span>为什么白羊座更容易出渣男|十三星座的恋爱攻略</span>
    	 <div class="zhuye_3_img"><img src="../assets/img/pinglun.gif"/>55</div>
    	 <div class="zhuye_3_img"><img src="../assets/img/dianzan.gif"/>55</div>
    	</div>
    </div>
      <div class="zhuye1_3">
    <div class="zhuye1_3_1">
      <div class="zhuye1_3_img"><img src="../assets/img/diaiyan.gif"/></div>
     <router-link to='/shouye' class="zhuye1_2_font">Daily</router-link>
    </div>
    <div class="zhuye1_3_2" @click="dianji">
          <div class="zhuye1_3_img"><img src="../assets/img/allliang.gif"/></div>
          <div class="zhuye1_1_font">All</div>
    </div>
    <div class="zhuye1_3_2" @click="dianji">
         <div class="zhuye1_3_img"><img src="../assets/img/mean.gif"/></div>
         <router-link to='/me' class="zhuye1_2_font">me</router-link>
    </div>
  </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>

	</div>
</template>
<style lang="css">
    @import url("../assets/css/global.css");
    @import url("../assets/css/zhuye.css");
</style>