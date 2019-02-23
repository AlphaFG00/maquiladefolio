import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Terminos from '@/views/terminos.vue'
import hijo from '@/components/hijo.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/terminos',
			name: 'terminos',
			component: Terminos,
			children: [
				{
					path: 'hijo',
					name: 'hijo',
					component: hijo
				}
			]
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	]
})
