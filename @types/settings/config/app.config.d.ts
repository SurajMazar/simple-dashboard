import { LayoutTypeKeyInterface } from '@/@types/containers/layout/layout'

/**
 * APPLICATION CONFIGURATIONS
 */
export type AppConfigurationInterface = {
	API_BASE_URL: string
	CACHE_DURATION: number | Infinity // IN MINUTES
	DEFAULT_LAYOUT?: LayoutTypeKeyInterface | 'NONE'
	AUTH_TOKEN_KEY: string
}
