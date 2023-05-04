import { configureStore } from "@reduxjs/toolkit";
import modalSlice from './ModalSlice'
import loginSlice from './ModalSlice'

export default configureStore({
    reducer: {
        modal: modalSlice,
    }
});
