import { configureStore } from "@reduxjs/toolkit";

import langSlice from "./langSlice";



const store = configureStore({
    reducer: {
        lang: langSlice,
    }
});
export default store;