import {Reducer, configureStore} from '@reduxjs/toolkit'
import authDetailsReducer from './AuthSice'
import { AuthState } from '@/Interfaces'


const store = configureStore({
    reducer: {
        Authentication:authDetailsReducer as Reducer<AuthState>
    }
})

export default store;   