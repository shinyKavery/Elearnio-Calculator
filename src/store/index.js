import {configureStore, createSlice} from '@reduxjs/toolkit'
const initialAuthenticationStatus = {isLoggedIn:false}
const authSlice = createSlice({
    name:'Authentication',
    initialState:initialAuthenticationStatus,
    reducers:{
login(state){
    state.isLoggedIn = true
},
logout(state){
    state.isLoggedIn = false
}
    }
})

export const authActions = authSlice.actions
const Store = configureStore({reducer:{
    auth: authSlice.reducer
}});
export default Store;