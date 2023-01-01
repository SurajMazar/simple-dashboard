import React, { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ReactQueryConfig from '@/settings/config/react-query.config'

const ReactQueryProvider: React.FC<PropsWithChildren> = (props) => {
	/**
	 * COMPONENT PROPS
	 */
	const { children } = props

	/**
	 * QUERY CLIENT INSTANCE
	 */
	const reactQueryClient = new QueryClient({
		defaultOptions: ReactQueryConfig.defaultOptions,
	})

	return (
		// REACT QUERY PROVIDER
		<QueryClientProvider client={reactQueryClient}>
			{children}
			{/* REACT QUERY DEV TOOLS */}
			<ReactQueryDevtools
				initialIsOpen={ReactQueryConfig.devtools.defaultOpen}
			/>
		</QueryClientProvider>
	)
}

export default ReactQueryProvider
