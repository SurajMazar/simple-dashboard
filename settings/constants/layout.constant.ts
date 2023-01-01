import AuthLayout from '@/containers/layouts/auth'
import Dashboard from '@/containers/layouts/dashboard'

const LayoutTypes = {
	auth: {
		component: AuthLayout,
	},
	dashboard: {
		component: Dashboard,
	},
	web: {
		component: AuthLayout,
	}
} as const

export default LayoutTypes
