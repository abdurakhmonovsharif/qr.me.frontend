import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
    name: "options",
    initialState: {
        end_date: "",
        max_edit_count: 0,
        max_view_count: 0,
        password_edit: "",
        password_view: ""
    } as Options,
    reducers: {
        setOptions: (state, action: PayloadAction<{ value: string | number, field: keyof Options }>) => {
            const { field, value } = action.payload;
            if (typeof (value) === "string" || typeof (value) === "number") {
                return {
                    ...state,
                    [field]: value
                }
            }
        },
        clearOptions: () => {
            return {
                end_date: "",
                max_edit_count: 0,
                max_view_count: 0,
                password_edit: "",
                password_view: ""
            };
        },
    },
});

export const { setOptions, clearOptions } = optionsSlice.actions;
export default optionsSlice.reducer;