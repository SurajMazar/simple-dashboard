import { CustomAppProps } from '@/@types/next'
import store from '@/app/store/store'
import '@/assets/styles/app.scss'
import ApplicationBoot from '@/containers/hoc/ApplicationBoot'
import ReactQueryProvider from '@/containers/hoc/ReactQueryProvider'
import ApplicationLayout from '@/containers/layouts'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: CustomAppProps) {
	return (
		// REDUX PROVIDER
		<Provider store={store}>
			{/**APPLICATION BOOT -- PERFORMS INITIALIZATION BEFORE LOADING APPLICATION */}
			<ApplicationBoot>
				{/** LAYOUT BUILDER -- CREATES APPROPRIATE LAYOUT VIA TYPE */}
				<ApplicationLayout layoutType={Component.layout}>
					{/** REACT QUERY PROVIDER HOC */}
					<ReactQueryProvider>
						{/** NEXT PAGE COMPONENT */}
						<Component {...pageProps} />
					</ReactQueryProvider>
				</ApplicationLayout>
			</ApplicationBoot>
		</Provider>
	)
}
