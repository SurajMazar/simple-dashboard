import { AppConfigurationInterface } from '@/@types/settings/config/app.config'

/**
 * @property string API_BASE_URL  -- BASE URL FOR API (BACKEND) - BLANK IF SAME APP
 * @property number CACHE_DURATION -- REACT QUERY CACHE DURATION IN MINUTES
 */
const APP_CONFIG: AppConfigurationInterface = {
	API_BASE_URL: '',
	CACHE_DURATION: 5,
	DEFAULT_LAYOUT: 'NONE',
	AUTH_TOKEN_KEY: 'auth-token',
}

export default APP_CONFIG
