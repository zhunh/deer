import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueResource from 'vue-resource'
import ShowText from '@/components/ShowText'
import JSExpression from '@/components/JSExpressionTest'
import RobotTest from '@/components/RobotTest'
import MovieList from '@/pages/moviesList.vue'
import MovieDetail from '@/pages/movieDetail'
import LoginPage from '@/pages/loginPage'
import RegisterPage from '@/pages/registerPage'
import NewDetail from '../pages/newDetail.vue'
import FindPasswordPage from '../pages/findPasswordPage.vue'
import AdminPage from '../pages/adminPage.vue'
import UserInfo from '../pages/userInfo.vue'
import SendEmail from '../pages/sendEmail.vue'

Vue.use(VueResource)
Vue.use(Router)
//这里和跨域有关的
Vue.http.options.emulateJSON = true
const routes = [
	{
		path: '/',
		component: resolve => require(['../pages/index'], resolve),
		meta: {
			title: 'home'
		}
	},
	{
		path: '/ShowText',
		component: ShowText
	},
	{
		path: '/JSExpression',
		component: JSExpression
	},
	{
		path: '/RobotTest',
		component: RobotTest
	},
	{
		path: '/userInfo',
		component: UserInfo
	},
	{
		path: '/movieList',
		component: MovieList
	},
	{
		path: '/loginPage',
		component: LoginPage
	},
	{
		path: '/registerPage',
		component: RegisterPage
	},
	{
		path:'/movieDetail',
		component:MovieDetail
	},
	{
		path:'/newDetail',
		component:NewDetail
	},
	{
		path:'/findPassword',
		component:FindPasswordPage
	},
	{
		path:'/admin',
		component:AdminPage
	},
	{
		path:'/sendEmail',
		component:SendEmail
	}
]

var router = new Router({routes});
export default router;
/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})*/
