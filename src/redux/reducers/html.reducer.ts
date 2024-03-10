import { createSlice } from "@reduxjs/toolkit";

const htmlSlice = createSlice({
    name: "html",
    initialState: "<!DOCTYPE html>",
    reducers: {
        setHtml: (state, action) => {
            state = "<!DOCTYPE html>" + action.payload;
            return state;
        },
        clearHtml: () => {
            return "<!DOCTYPE html>";
        },
    },
});

export const { setHtml, clearHtml } = htmlSlice.actions;
export default htmlSlice.reducer;