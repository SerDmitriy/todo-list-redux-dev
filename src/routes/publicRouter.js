import Registration from '../components/Registration/Registration.js'
import Login from '../components/Login/Login'
import HomePage from '../components/homePage/HomePage'
import SignIn from '../components/Registration/SignIn'

export default [
	{
		exact: true,
		path: '/login',
		component: Login,
	},
	{
		exact: true,
		path: '/registration',
		component: Registration,
	},
	{
		exact: true,
		path: '/signIn',
		component: SignIn,
	},
	{
		exact: true,
		path: '/',
		component: HomePage,
	},
]
