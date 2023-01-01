/**
 * CHECK IF THE APPLICATION IS RUNNING ON CLIENT SIDE
 * @returns boolean
 */
export const isClient = (): boolean => {
	return (
		typeof window !== 'undefined' &&
		typeof localStorage !== 'undefined' &&
		typeof document !== 'undefined'
	)
}
