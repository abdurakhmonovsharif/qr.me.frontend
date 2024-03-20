import { createSlice } from "@reduxjs/toolkit";

const htmlSlice = createSlice({
    name: "html",
    initialState: { content: "<!DOCTYPE html>", loading: false },
    reducers: {
        setHtml: (state, action) => {
            state.content = "<!DOCTYPE html>" + action.payload.content;
            state.loading = action.payload.loading
            return state;
        },
        clearHtml: () => {
            return { content: "<!DOCTYPE html>", loading: false };
        },
    },
});

export const { setHtml, clearHtml } = htmlSlice.actions;
export default htmlSlice.reducer;