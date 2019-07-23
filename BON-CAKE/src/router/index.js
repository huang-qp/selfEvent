import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import all from '@/components/all/all'
import newgoods from '@/components/newgoods/newgoods'
import activity from '@/components/activity/activity'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index"
    },
		{
		  path: '/index',
		  name: 'index',
		  component: index
		},{
		  path: '/all',
		  name: 'all',
		  component: all
		},{
		  path: '/newgoods',
		  name: 'newgoods',
		  component: newgoods
		},{
		  path: '/activity',
		  name: 'activity',
		  component: activity
		}
  ]
})
