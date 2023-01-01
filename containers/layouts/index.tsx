import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { ApplicationLayoutProps } from '@/@types/containers/layout/layout'
import LayoutTypes from '@/settings/constants/layout.constant'
import APP_CONFIG from '@/settings/config/app.config'

const ApplicationLayout: React.FC<PropsWithChildren<ApplicationLayoutProps>> = (
	props
) => {
	/** COMPONENT PROPS */
	const { children, layoutType } = props

	/**
	 * APP CONFIG
	 */
	const { DEFAULT_LAYOUT } = APP_CONFIG

	/** PLAIN LAYOUT -- NO LAYOUT */
	const Plain = <>{children}</>

	/** HIGHER PRIORITY -- IF COMPONENT HAS NONE LAYOUT */
	if (layoutType === 'NONE') {
		return Plain
	}

	/** COMPONENT HAS LAYOUT */
	if (layoutType) {
		const { component: Layout } = LayoutTypes[layoutType]
		return <Layout>{children}</Layout>
	} else if (DEFAULT_LAYOUT && DEFAULT_LAYOUT !== 'NONE') {
	/** IF COMPONENT DOESNT HAVE LAYOUT WE CHECK FOR DEFAULTS -- LEAST PRIORITY*/
		const { component: Layout } = LayoutTypes[DEFAULT_LAYOUT]
		return <Layout>{children}</Layout>
	}

	return Plain
}

export default ApplicationLayout
