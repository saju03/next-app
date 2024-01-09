import { AuthState } from "@/Interfaces";
import { PayloadAction, Reducer, createSlice } from "@reduxjs/toolkit";


interface SetAuthDetailsPayload {
    accessToken: string;
    refreshToken: string;
    expireTime: string;
}

const authDetails = createSlice({
    name: 'Authentication',
    initialState: {
        accessToken:'',
        refreshToken:'',
        expireTime:''
    }as AuthState,
    reducers: {
        setAuthenticationDetails:(state,action:PayloadAction<SetAuthDetailsPayload>)=>{
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.expireTime = action.payload.expireTime;
        }
    }
})
export type AuthDetailsAction = PayloadAction<SetAuthDetailsPayload>;
export const {setAuthenticationDetails} = authDetails.actions;
const authDetailsReducer: Reducer<AuthState, PayloadAction<SetAuthDetailsPayload>> = authDetails.reducer;
export default authDetailsReducer;
