import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../pages/index'
import register from '../pages/register'
import login from '../pages/login.vue'
import category from '../pages/category.vue'
import axios from 'axios'
import me from '@/pages/me.vue'
import shouye from '@/pages/shouye.vue'
import liebiao from '@/pages/liebiao.vue'
import zhuye from '@/pages/zhuye.vue'

Vue.prototype.axios = axios;
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path:'/index',
    	name:'index',
    	component:index
    },{
    	path:'/register',
    	name:"register",
    	component:register
    },{
    	path:'/login',
    	name:'login',
    	component:login
    },{
    	path:'/category',
    	name:'category',
    	component:category
    },{
    	path:'/me',
    	name:'me',
    	component:me
    },{
    	path:'/shouye',
    	name:'shouye',
    	component:shouye
    },{
    	path:'/liebiao',
    	name:'liebiao',
    	component:liebiao
    },{
    	path:'/zhuye',
    	name:'zhuye',
    	component:zhuye
    }
  ]
})
