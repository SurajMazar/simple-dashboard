import { configureStore } from '@reduxjs/toolkit'
import { env } from 'process'
import reducer from './reducer'

/**
 * REDUX STORE INITIALIZATION
 */
const store = configureStore({
	devTools: process.env.NODE_ENV !== 'production',
	reducer,
})

export default store
