import { createSlice } from "@reduxjs/toolkit";

const themeSlice= createSlice({
    name:"themeChanger",
    initialState: {
        theme: "dark",
    },
    reducers : {
        toogleTheme : (state,action) => {
            if(state.theme==="light") state.theme="dark";
            else state.theme="light";
        }
    }
});
export default themeSlice.reducer;
export const {toogleTheme} = themeSlice.actions;