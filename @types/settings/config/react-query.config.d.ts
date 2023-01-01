import { DefaultOptions } from 'react-query'

/**
 * REACT QUERY DEFAULT CONFIGURATIONS
 */
export interface ReactQueryConfigInterface {
	defaultOptions?: DefaultOptions<unknown>
	devtools: {
		defaultOpen: boolean
	}
}
