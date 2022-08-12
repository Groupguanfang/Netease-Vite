import VueRouter from 'vue-router'
import Vue from 'vue'

// 使用VueRouter
Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
	mode: 'hash',
	base: '/',
	routes
})

export default router