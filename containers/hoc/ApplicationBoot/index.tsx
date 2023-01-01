import AuthSlice from '@/app/store/slice/auth.slice'
import APP_CONFIG from '@/settings/config/app.config'
import { isClient } from '@/utils/helpers.utils'
import { getLocalStorage } from '@/utils/localstorage.utils'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const ApplicationBoot: React.FC<PropsWithChildren<{}>> = (props) => {
	/**
	 * COMPONENT PROPS
	 */
	const { children } = props

	/**
	 * COMPONENT STATE
	 */
	const [booted, setBooted] = useState<boolean>(false)

	/**
	 * USE DISPATCH HOOK
	 */
	const dispatch = useDispatch()

	/**
	 * INITIALIZATION
	 */
	const init = () => {
		if (isClient()) {
			const token = getLocalStorage(APP_CONFIG.AUTH_TOKEN_KEY)
			if (token) dispatch(AuthSlice.actions.setToken(token))
		}
		setBooted(true)
	}

	/**
	 * MOUNTED HOOK -- BEFORE DOME INITIALIZATION
	 */
	useEffect(() => {
		init()
	}, [])

	return <>{booted ? children : ''}</>
}

export default ApplicationBoot
