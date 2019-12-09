// deps
import Vue from 'vue'
import Router from 'vue-router'

// views
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/contact',
			component: Contact
		},
		{
			path: '/about',
			component: About
		}
	]
})
