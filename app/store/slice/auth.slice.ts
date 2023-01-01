import { AuthStoreInterface } from '@/@types/app/store'
import { createSlice } from '@reduxjs/toolkit'

/**
 * INITIAL AUTH STATE
 */
const initialState: AuthStoreInterface = {
	authenticated: false,
	authenticating: false,
	authUser: undefined,
}

/**
 * AUTH SLICE
 */
const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		/** LOGIN REQUEST */
		loginRequest(state) {
			state.authenticating = true
		},
		/** ON LOGIN SUCCESS */
		loginSuccess(state, action) {
			state.authUser = action.payload.user
			state.token = action.payload.token
			state.authenticated = true
			state.authenticating = false
		},
		/** ON LOGIN FAILURE */
		loginFail(state) {
			state.authUser = undefined
			state.token = undefined
			state.authenticated = false
		},
		/** SET AUTH TOKEN */
		setToken(state, action) {
			state.token = action.payload
			state.authenticated = true
		},
	},
})

export default AuthSlice
