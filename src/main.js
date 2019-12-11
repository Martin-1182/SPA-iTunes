import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyHelper from './helpers'

Vue.use(MyHelper)
require('../node_modules/@fortawesome/js/fontawesome-all')

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
