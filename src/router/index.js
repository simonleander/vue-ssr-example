import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const createRouter = () => {
	return new Router({
		mode: 'history',
		routes: [
			{ path: '/', component: () => import('../components/Home.vue') },
			{ path: '/article/:source', component: () => import('../components/Articles.vue')}
		]
	});
};
