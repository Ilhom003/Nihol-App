import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: 'Modal',
    initialState: {
        profileModalVisibility: false,
        languageModalVisibility: false,
    },
    reducers: {
        switchProfileModalVisibility: (state) => {
            state.profileModalVisibility = !state.profileModalVisibility
        },
        switchLanguageModalVisibility: (state) => {
            state.languageModalVisibility = !state.languageModalVisibility
        }
    }
})

export const { switchProfileModalVisibility, switchLanguageModalVisibility } = ModalSlice.actions;
export default ModalSlice.reducer