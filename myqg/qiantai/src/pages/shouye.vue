<template>
<div class="subl">
  <div class="shouye_1"><img src="../assets/img/toubu.gif"/></div>
  <router-link to='/liebiao' class="shouye_2"><img src="../assets/img/shouye.gif"/></router-link>
  <div class="shouye_3">
    <div class="shouye_3_1">
      <div class="shouye_3_img"><img src="../assets/img/oneliang.gif"/></div>
      <div class="shouye_1_font">Daily</div>
    </div>
    <router-link to='/zhuye' class="shouye_3_2" @click="dianji">
          <div class="shouye_3_img"><img src="../assets/img/Allan.gif"/></div>
          <div class="shouye_2_font">All</div>
    </router-link>
    <router-link to='/me' class="shouye_3_2" @click="dianji">
         <div class="shouye_3_img"><img src="../assets/img/Mean.gif"/></div>
         <div class="shouye_2_font">Me</div>
    </router-link>
  </div>

</div>
</template>
<style>
  @import url("../assets/css/global.css");
  @import url("../assets/css/shouye.css");
</style>
