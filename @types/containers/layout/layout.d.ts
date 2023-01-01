import LayoutTypes from '@/settings/constants/layout.constant'

/** INTERFACE FOR KEY OF LAYOUT TYPES */
export type LayoutTypeKeyInterface = keyof typeof LayoutTypes | 'NONE'

/** LAYOUT HOC COMPONENT PROP TYPE  */
export type ApplicationLayoutProps = {
	layoutType?: LayoutTypeKeyInterface
}
