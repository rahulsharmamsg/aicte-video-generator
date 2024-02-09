import { createSlice } from "@reduxjs/toolkit";
const langSlice = createSlice({
    name: "langSlice",
    initialState: {
        selectedLang: "en-IN",
        selectedVoice: "en-IN-NeerjaNeural"
    },
    reducers: {
        langSelected: (state, action) => {
            
            state.selectedLang = action.payload;
        },
        voiceSelected: (state, action) => {
            state.selectedVoice = action.payload;
        },
    }
});
// 
export const { langSelected ,voiceSelected} = langSlice.actions;
export default langSlice.reducer;