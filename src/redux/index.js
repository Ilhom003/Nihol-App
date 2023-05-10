import { configureStore } from "@reduxjs/toolkit";
import modalSlice from './ModalSlice'
import localeSlice from "./localeSlice";

export default configureStore({
    reducer: {
        modal: modalSlice,
        locale:localeSlice
    }
});
