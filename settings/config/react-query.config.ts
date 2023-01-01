import { ReactQueryConfigInterface } from '@/@types/settings/config/react-query.config'
import { minuteToMilliSecond } from '@/utils/dateTime.util'
import APP_CONFIG from './app.config'

/**
 * Default react query configuration
 * To learn more about configurations : https://react-query-v3.tanstack.com/guides/important-defaults
 */
const ReactQueryConfig: ReactQueryConfigInterface = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			cacheTime: minuteToMilliSecond(APP_CONFIG.CACHE_DURATION),
		},
	},
	devtools: {
		defaultOpen: false,
	},
}

export default ReactQueryConfig
