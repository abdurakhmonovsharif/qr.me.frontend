import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { id: null, email: null, name: null },
    reducers: {
        setUser: (state, action) => {
            const { id, email, name } = action.payload;
            return { ...state, id, email, name };
        },
        clearUser: () => {
            return { id: null, email: null, name: null };
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;