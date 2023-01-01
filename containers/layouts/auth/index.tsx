import React, { PropsWithChildren } from 'react'

const AuthLayout: React.FC<PropsWithChildren> = (props) => {
	/**
	 * COMPONENT PROPS
	 */
	const { children } = props

	return <>this is auth {children}</>
}

export default AuthLayout
