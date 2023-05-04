import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: 'Modal',
    initialState: {
        profileModalVisibility:false,
        logoutModalVisibility:false,
    },
    reducers:{
       switchProfileModalVisibility: (state)=>{
            state.profileModalVisibility = !state.profileModalVisibility
        },
       switchLogoutModalVisibility: (state)=>{
            state.logoutModalVisibility = !state.logoutModalVisibility
        }
    }
})

export const {switchProfileModalVisibility,switchLogoutModalVisibility} = ModalSlice.actions;
export default ModalSlice.reducer