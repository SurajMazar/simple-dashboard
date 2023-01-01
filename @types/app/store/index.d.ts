/**
 * AUTH STORE INTERFACE
 */
export type AuthStoreInterface = {
	token?: string
	authenticated: boolean
	authUser: any
	authenticating: boolean
}
