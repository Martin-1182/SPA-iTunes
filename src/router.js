// deps
import Vue from 'vue'
import Router from 'vue-router'

// views
import Home from './views/Home.vue'
import About from './views/About.vue'
import Tunes from './views/Tunes.vue'
import NotFoundComponent from './views/404.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/tunes',
			component: Tunes
		},
		{
			path: '/about',
			component: About
		},
		{ path: '*', component: NotFoundComponent }
	]
})
