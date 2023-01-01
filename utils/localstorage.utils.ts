import { isClient } from './helpers.utils'

/**
 * Set value in local storage
 * @param key
 * @param value
 */
export let setLocalStorage = (key: string, value: any) => {
	if (isClient()) {
		if (value && typeof value === 'string') {
			localStorage.setItem(key, value)
		} else {
			localStorage.setItem(key, JSON.stringify(value)) // convert arrays or objects into strings
		}
	}
}

/**
 * Clears LocalStorage
 */
export const clearLocalStorage = () => {
	if (isClient()) {
		localStorage.clear()
	}
}

/**
 * Json parseable?
 * @param data
 * @returns
 */
export const isJsonParseAble = (data: any) => {
	try {
		if (JSON.parse(data)) {
			return true
		}
	} catch {
		return false
	}
}

/**
 * Gets value from local storage
 * @param {*} key
 * @returns
 */
export const getLocalStorage = (key: string) => {
	if (isClient()) {
		const value = localStorage.getItem(key)
		if (value && isJsonParseAble(value)) {
			return JSON.parse(value)
		}
		return value
	}

	return undefined
}
