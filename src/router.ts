import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { MainLayout } from './layouts'
import { Home, NewDesign, SingleDesign } from './views'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: MainLayout,
		children: [
			{
				path: '',
				component: Home,
				name: 'home'
			},
			{
				path: 'design/create',
				component: NewDesign,
				name: 'new-design'
			},
			{
				path: 'design/:id',
				component: SingleDesign,
				name: 'single-design'
			},
		]
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})